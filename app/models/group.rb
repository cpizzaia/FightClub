class Group < ActiveRecord::Base

  validates :title, :organizer_id, :description, :city, :state, presence: :true

  has_attached_file :group_img, default_url: "group_missing.jpg"
  validates_attachment_content_type :group_img, content_type: /\Aimage\/.*\Z/

  after_save :create_users_group

  belongs_to(
    :organizer,
    class_name: "User",
    foreign_key: :organizer_id,
    primary_key: :id
  )

  has_many(
    :users_groups,
    class_name: "UsersGroup",
    foreign_key: :group_id,
    primary_key: :id
  )

  has_many(
    :members,
    through: "users_groups",
    source: :user
  )

  has_many(
    :events,
    class_name: "Event",
    foreign_key: :group_id,
    primary_key: :id
  )

  def zipcode=(zipcode)
    self.city = zipcode.to_region(:city => true)
    self.state = zipcode.to_region(:state => true)
  end

  def create_users_group
    UsersGroup.create({group_id: self.id, user_id: self.organizer_id})
  end

  def founded
    self.created_at.strftime('%b %d %Y')
  end

  def member_count
    self.members.count
  end

  def all_users_events(user_id)
    UsersEvent
    .joins('INNER JOIN events ON events.id = users_events.event_id')
    .joins('INNER JOIN groups ON groups.id = events.group_id')
    .where('users_events.user_id = ? AND groups.id = ?', user_id, self.id)
  end
end

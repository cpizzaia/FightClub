class Group < ActiveRecord::Base
  validates :title, :organizer_id, :description, :city, :state, presence: :true

  has_attached_file :group_img, default_url: "group_missing.jpg"
  validates_attachment_content_type :group_img, content_type: /\Aimage\/.*\Z/

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
end

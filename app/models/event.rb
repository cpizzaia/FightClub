class Event < ActiveRecord::Base
  validates :start_time, :title, :description, :group_id, :address, presence: true

  belongs_to(
    :group,
    class_name: "Group",
    foreign_key: :group_id,
    primary_key: :id
  )

  has_many(
    :users_events,
    class_name: "UsersEvent",
    foreign_key: :event_id,
    primary_key: :id
  )

  has_many(
    :users,
    through: "users_events",
    source: :user
  )

  def start_date
    self.start_time.strftime('%a %b %d')
  end

  def start_hour
    self.start_time.strftime("%l:%M %p")
  end

end

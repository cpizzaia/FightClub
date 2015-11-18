class Group < ActiveRecord::Base
  validates :title, :organizer_id, :description, presence: :true

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
end

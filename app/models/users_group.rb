class UsersGroup < ActiveRecord::Base
  validates :group_id, :user_id, presence: true
  validates :group_id, uniqueness: {scope: [:user_id]}

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :group,
    class_name: "Group",
    foreign_key: :group_id,
    primary_key: :id
  )

end

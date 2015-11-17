class Group < ActiveRecord::Base
  validates :title, :organizer_id, :description, presence: :true

  belongs_to(
    :organizer,
    class_name: "User",
    foreign_key: :organizer_id,
    primary_key: :id
  )
end

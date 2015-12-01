class Comment < ActiveRecord::Base
  validates :author_id, :body, presence: true
  validate :has_reference

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to :event

  has_many(
    :child_comments,
    class_name: "Comment",
    foreign_key: :parent_comment_id,
    primary_key: :id
  )

  belongs_to(
    :parent_comment,
    class_name: "Comment",
    foreign_key: :parent_comment_id,
    primary_key: :id
  )

  def has_reference
    if (event_id.nil? && parent_comment_id.nil?) || (!event_id.nil? && !parent_comment_id.nil?)
      errors[:base] << "Comment must be in response to something"
    end
  end
end

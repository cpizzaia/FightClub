json.extract!(
  comment,
  :id, :body, :parent_comment_id
)

json.author do
  json.partial!('api/users/user', user: comment.author, show_groups: false)
end

json.responses do
  json.array!(comment.responses) do |comment|
    json.partial!('comment', comment: comment)
  end
end

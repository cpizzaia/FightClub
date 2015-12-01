json.extract!(
  comment,
  :id, :body
)

json.responses do
  json.array!(comment.child_comments) do |comment|
    json.partial!('comment', comment: comment)
  end
end

json.author do
  json.partial!('api/users/user', user: comment.author, show_groups: false)
end

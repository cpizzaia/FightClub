json.extract!(
  comment,
  :id, :body
)

json.author do
  json.partial!('api/users/user', user: comment.author, show_groups: false)
end

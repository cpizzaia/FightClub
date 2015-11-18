json.extract!(
  group,
  :id, :title, :organizer_id, :description, :image
)


json.members do
  json.array!(group.members) do |member|
    json.partial!('api/users/user', user: member)
  end
end

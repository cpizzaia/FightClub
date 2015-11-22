json.extract!(
  group,
  :id, :title, :organizer_id, :description, :city, :state
)

json.group_img_url asset_path(group.group_img.url)

if show_members
  json.members do
    json.array!(group.members) do |member|
      json.partial!('api/users/user', user: member, show_groups: false)
    end
  end
end

if show_events
  json.events do
    json.array!(group.events) do |event|
      json.partial!('api/events/event', event: event, show_users: true)
    end
  end
end

json.organizer do
   json.partial!('api/users/user', user: group.organizer, show_groups: false)
end

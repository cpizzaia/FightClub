json.extract!(
  group,
  :id, :title, :organizer_id, :description, :image
)

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

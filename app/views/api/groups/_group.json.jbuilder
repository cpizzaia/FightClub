json.extract!(
  group,
  :id, :title, :organizer_id, :description, :city, :state, :member_noun
)

json.group_img_url asset_path(group.group_img.url)

if show_members
  json.members do
    json.array!(group.members) do |member|
      json.partial!('api/users/user', user: member, show_groups: false)
    end
  end
end

if show_upcoming_events
  json.upcoming_events do
    json.array!(group.events.upcoming.order("start_time")) do |event|
      json.partial!('api/events/event', event: event, show_users: true)
    end
  end
end

if show_past_events
  json.past_events do
    json.array!(group.events.past.order("start_time")) do |event|
      json.partial!('api/events/event', event: event, show_users: true)
    end
  end
end

json.organizer do
   json.partial!('api/users/user', user: group.organizer, show_groups: false)
end

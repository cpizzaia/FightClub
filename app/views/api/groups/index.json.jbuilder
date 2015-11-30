json.array!(@groups) do |group|
  json.partial!(
    'api/groups/group', group:
    group, show_members: false,
    show_upcoming_events: false,
    show_past_events: false,
    show_member_count: true
  )
end

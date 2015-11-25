json.array!(@groups) do |group|
  json.partial!(
    'group', group:
    group, show_members: true,
    show_upcoming_events: false,
    show_past_events: false
  )
end

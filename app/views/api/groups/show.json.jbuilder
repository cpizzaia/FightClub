json.partial!(
  'api/groups/group',
  group: @group,
  show_members: true,
  show_upcoming_events: true,
  show_past_events: true
)

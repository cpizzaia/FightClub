json.results do
  json.array! @groups.map(&:searchable) do |group|

    json.partial!(
      'api/groups/group',
      group: group,
      show_members: false,
      show_upcoming_events: false,
      show_past_events: false,
      show_member_count: true
    )
      json._type "Group"

  end
end

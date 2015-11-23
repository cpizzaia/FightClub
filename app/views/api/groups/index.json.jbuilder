json.array!(@groups) do |group|
  json.partial!('group', group: group, show_members: true, show_events: false)
end

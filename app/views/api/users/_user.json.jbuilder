
unless user.nil?
  json.extract!(
    user,
    :id, :name
  )

  json.profile_img_url asset_path(user.profile_img.url)


  if show_groups
    json.groups do
      json.array!(user.groups_where_not_organizer) do |group|
        json.partial!(
          'api/groups/group',
          group: group,
          show_members: false,
          show_upcoming_events: false,
          show_past_events: false,
          show_member_count: true
        )
      end
    end

    json.groups_led do
      json.array!(user.groups_led) do |group|
        json.partial!(
          'api/groups/group',
          group: group,
          show_members: false,
          show_upcoming_events: false,
          show_past_events: false,
          show_member_count: true
        )
      end
    end
  end
end

json.extract!(
  user,
  :id, :useremail, :name
)

json.profile_img_url asset_path(user.profile_img.url)

if show_groups
  json.groups do
    json.array!(user.groups) do |group|
      json.partial!('api/groups/group', group: group, show_members: false)
    end
  end
end

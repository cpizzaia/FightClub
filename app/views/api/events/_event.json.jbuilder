json.extract!(
  event,
  :id, :start_date, :start_hour, :title, :description, :group_id, :address, :end_time, :lat, :lng
)

if show_users
  json.users do
    json.array!(event.users) do |user|
      json.partial!('api/users/user', user: user, show_groups: false)
    end
  end
end

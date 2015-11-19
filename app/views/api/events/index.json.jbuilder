json.array!(@events) do |event|
  json.partial!('event', event: event, show_users: false)
end

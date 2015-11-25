User.create({
  useremail: "ryu@capcom.com",
  name: "Ryu",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/ryu.png")
})

User.create({
  useremail: "ken@capcom.com",
  name: "Ken",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/ken.jpg")
})

User.create({
  useremail: "feilong@capcom.com",
  name: "Fei Long",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/feilong.png")
})


Group.create({
  title: "Addicted to the Shoryuken",
  description: "Join if you like to dragon punch",
  organizer_id: User.first.id,
  group_img: File.new("#{Rails.root}/app/assets/images/shoryuken.png"),
  member_noun: "Shotos",
  city: "New York",
  state: "NY"
})

Group.create({
  title: "Test Group 2",
  description: "who cares",
  organizer_id: User.first.id,
  city: "New York",
  state: "NY"
})

Group.create({
  title: "Test Group 3",
  description: "who cares",
  organizer_id: User.first.id,
  city: "New York",
  state: "NY"
})

Group.create({
  title: "Test Group 4",
  description: "who cares",
  organizer_id: User.first.id,
  city: "New York",
  state: "NY"
})

UsersGroup.create({group_id: 1, user_id: User.first.id})
UsersGroup.create({group_id: 2, user_id: User.first.id})
UsersGroup.create({group_id: 3, user_id: User.first.id})
UsersGroup.create({group_id: 1, user_id: User.all[1].id})
UsersGroup.create({group_id: 2, user_id: User.all[1].id})
UsersGroup.create({group_id: 4, user_id: User.all[1].id})

Event.create({
  start_time: DateTime.new(2016,1,1),
  title: "Fight Festival",
  description: "Fight all things!",
  group_id: Group.first.id,
  address: "Times Square"
})

Event.create({
  start_time: DateTime.new(2016,2,1),
  title: "Punchout Panic",
  description: "Fight all things!",
  group_id: Group.first.id,
  address: "Hawaii"
})

Event.create({
  start_time: DateTime.new(2016,3,1),
  title: "Haymaker Harvest",
  description: "Fight all things!",
  group_id: Group.first.id,
  address: "Great Wall of China"
})

Event.create({
  start_time: DateTime.new(2015,9,1),
  title: "Fall Fight",
  description: "Fight all things!",
  group_id: Group.first.id,
  address: "Great Wall of China"
})



UsersEvent.create({event_id: 1, user_id: User.first.id})
UsersEvent.create({event_id: 2, user_id: User.first.id})
UsersEvent.create({event_id: 3, user_id: User.first.id})
UsersEvent.create({event_id: 4, user_id: User.first.id})
UsersEvent.create({event_id: 1, user_id: User.all[1].id})
UsersEvent.create({event_id: 3, user_id: User.all[1].id})

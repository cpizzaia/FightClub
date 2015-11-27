User.create({
  useremail: "ryu@capcom.com",
  name: "Ryu",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/ryu.png")
})

User.create({
  useremail: "ken@capcom.com",
  name: "Ken",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/ken.gif")
})

User.create({
  useremail: "feilong@capcom.com",
  name: "Fei Long",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/feilong.gif")
})

User.create({
  useremail: "cammy@capcom.com",
  name: "Cammy",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/cammy.gif")
})

User.create({
  useremail: "chunli@capcom.com",
  name: "Chun Li",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/chun_li.gif")
})

User.create({
  useremail: "deejay@capcom.com",
  name: "Dee Jay",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/deejay.gif")
})

User.create({
  useremail: "blanka@capcom.com",
  name: "Blanka",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/blanka.gif")
})

User.create({
  useremail: "dhalsim@capcom.com",
  name: "Dhalsim",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/dhalsim.gif")
})

User.create({
  useremail: "guile@capcom.com",
  name: "Guile",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/guile.gif")
})

User.create({
  useremail: "balrog@capcom.com",
  name: "Balrog",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/balrog.gif")
})

User.create({
  useremail: "akuma@capcom.com",
  name: "Akuma",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/akuma.gif")
})

User.create({
  useremail: "honda@capcom.com",
  name: "Honda",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/honda.gif")
})

User.create({
  useremail: "mbison@capcom.com",
  name: "M. Bison",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/mbison.gif")
})

User.create({
  useremail: "sagat@capcom.com",
  name: "Sagat",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/sagat.gif")
})

User.create({
  useremail: "vega@capcom.com",
  name: "Vega",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/vega.gif")
})

User.create({
  useremail: "thawk@capcom.com",
  name: "T. Hawk",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/thawk.gif")
})

User.create({
  useremail: "zangief@capcom.com",
  name: "Zangief",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/zangief.gif")
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

UsersGroup.create({group_id: 2, user_id: User.first.id})
UsersGroup.create({group_id: 3, user_id: User.first.id})
UsersGroup.create({group_id: 2, user_id: User.all[1].id})
UsersGroup.create({group_id: 4, user_id: User.all[1].id})

User.all.each do |user|
  UsersGroup.create({group_id: 1, user_id: user.id})
end

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

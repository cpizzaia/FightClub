User.create({
  email: "ryu@capcom.com",
  name: "Ryu",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/ryu.png")
})

User.create({
  email: "ken@capcom.com",
  name: "Ken",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/ken.gif")
})

User.create({
  email: "feilong@capcom.com",
  name: "Fei Long",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/feilong.gif")
})

User.create({
  email: "cammy@capcom.com",
  name: "Cammy",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/cammy.gif")
})

User.create({
  email: "chunli@capcom.com",
  name: "Chun Li",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/chun_li.gif")
})

User.create({
  email: "deejay@capcom.com",
  name: "Dee Jay",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/deejay.gif")
})

User.create({
  email: "blanka@capcom.com",
  name: "Blanka",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/blanka.gif")
})

User.create({
  email: "dhalsim@capcom.com",
  name: "Dhalsim",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/dhalsim.gif")
})

User.create({
  email: "guile@capcom.com",
  name: "Guile",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/guile.gif")
})

User.create({
  email: "balrog@capcom.com",
  name: "Balrog",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/balrog.gif")
})

User.create({
  email: "akuma@capcom.com",
  name: "Akuma",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/akuma.gif")
})

User.create({
  email: "honda@capcom.com",
  name: "Honda",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/honda.gif")
})

User.create({
  email: "mbison@capcom.com",
  name: "M. Bison",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/mbison.gif")
})

User.create({
  email: "sagat@capcom.com",
  name: "Sagat",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/sagat.gif")
})

User.create({
  email: "vega@capcom.com",
  name: "Vega",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/vega.gif")
})

User.create({
  email: "thawk@capcom.com",
  name: "T. Hawk",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/thawk.gif")
})

User.create({
  email: "zangief@capcom.com",
  name: "Zangief",
  password: "123456",
  profile_img: File.new("#{Rails.root}/app/assets/images/profile_images/zangief.gif")
})


Group.create({
  title: "Airfield Addicts",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[0].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/airfield.png"),
  member_noun: "Addicts",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Alley Ambushers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[1].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/alley.png"),
  member_noun: "Ambushers",
  city: "New York",
  state: "NY"
})



Group.create({
  title: "Brewery Brawlers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[2].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/brewery.png"),
  member_noun: "Brawlers",
  city: "New York",
  state: "NY"
})



Group.create({
  title: "Bridge Busters",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[3].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/bridge.png"),
  member_noun: "Busters",
  city: "New York",
  state: "NY"
})



Group.create({
  title: "Construction Crazed",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[4].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/constructionsite.png"),
  member_noun: "Crazies",
  city: "New York",
  state: "NY"
})



Group.create({
  title: "Diner Dashers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[5].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/diner.png"),
  member_noun: "Dashers",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Jungle Jammers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[6].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/jungle.png"),
  member_noun: "Jammers",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Lab Lungers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[7].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/lab.png"),
  member_noun: "Lungers",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Olympic Warriors",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[8].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/olympics.png"),
  member_noun: "Warriors",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Plains Punchers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[9].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/plains.png"),
  member_noun: "Punchers",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Railyard Rumblers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[10].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/railyard.png"),
  member_noun: "Rumblers",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Rural Rampants",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[11].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/rural.png"),
  member_noun: "Rampants",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Ship Shooters",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[12].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/ship.png"),
  member_noun: "Shooters",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Temple Tempests",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[13].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/temple.png"),
  member_noun: "Tempests",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Town Tumblers",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[14].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/town.png"),
  member_noun: "Tumblers",
  city: "New York",
  state: "NY"
})


Group.create({
  title: "Volcano Valiants",
  description: "Join if you like to dragon punch",
  organizer_id: User.all[15].id,
  group_img: File.new("#{Rails.root}/app/assets/images/stages/volcano.png"),
  member_noun: "Valiants",
  city: "New York",
  state: "NY"
})



User.all.each do |user|
  UsersGroup.create({group_id: 1, user_id: user.id})
end

User.all.each do |user|
  UsersEvent.create({event_id: 1, user_id: user.id})
end

def group_join_random_5_users (group)
  users = []
  while users.length <= 5
    user = User.all.sample
    if !users.include?(user) && group.organizer_id != user.id
      UsersGroup.create({group_id: group.id, user_id: user.id})
      users << user
    end
  end
end

Group.all.length.times do |i|
  next if i == 0
  group_join_random_5_users(Group.all[i])
end

Group.all.length.times do |i|
  event = Event.create({
    start_time: DateTime.new(2016,1,1),
    title: "Fight Festival",
    description: "Fight all things!",
    group_id: Group.all[i].id,
    address: "Times Square"
  })

  event = Event.create({
    start_time: DateTime.new(2016,2,1),
    title: "Punchout Panic",
    description: "Fight all things!",
    group_id: Group.all[i].id,
    address: "Hawaii"
  })

  event = Event.create({
    start_time: DateTime.new(2016,3,1),
    title: "Haymaker Harvest",
    description: "Fight all things!",
    group_id: Group.all[i].id,
    address: "Great Wall of China"
  })

  event = Event.create({
    start_time: DateTime.new(2015,9,1),
    title: "Fall Fight",
    description: "Fight all things!",
    group_id: Group.all[i].id,
    address: "Pyramids of Giza"
  })
end

Comment.create({
  author_id: User.where(email: "ryu@capcom.com").first.id,
  event_id: 1, body: "To live is to fight, to fight is to live!"
  })
Comment.create({
  author_id: User.where(email: "mbison@capcom.com").first.id,
  event_id: 1,
  body: "You cannot fight destiny. The world will be mine."})
Comment.create({
  author_id: User.where(email: "ken@capcom.com").first.id,
  event_id: 1,
  body: "I could really improve if I could find someone strong enough to beat me!"})
Comment.create({
  author_id: User.where(email: "chunli@capcom.com").first.id,
  event_id: 1,
  body: "It's been much too long since I've been in a fair fight!"
  })



Comment.create({
  author_id: User.where(email: "ryu@capcom.com").first.id,
  parent_comment_id: 4,
  body: "There's nothing like a fair fight. It improves both competitors."
  })

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({useremail: "ryu@capcom.com", name: "Ryu", password: "123456", profile_img: File.new("#{Rails.root}/app/assets/images/ryu.png")})


Group.create({title: "Addicted to the Shoryuken", description: "Join if you like to dragon punch", organizer_id: User.first.id, image: "http://ih0.redbubble.net/image.6153527.3451/sticker,375x360.png"})

Group.create({title: "Test Group 2", description: "who cares", organizer_id: User.first.id, image:"http://static.zerochan.net/Street.Fighter.full.172203.jpg"})

Group.create({title: "Test Group 3", description: "who cares", organizer_id: User.first.id, image:"http://static.zerochan.net/Street.Fighter.full.172203.jpg"})

Group.create({title: "Test Group 4", description: "who cares", organizer_id: User.first.id, image:"http://static.zerochan.net/Street.Fighter.full.172203.jpg"})

UsersGroup.create({group_id: 1, user_id: User.first.id})
UsersGroup.create({group_id: 2, user_id: User.first.id})
UsersGroup.create({group_id: 3, user_id: User.first.id})

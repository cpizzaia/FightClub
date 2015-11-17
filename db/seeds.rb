# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({useremail: "ryu@capcom.com", name: "Ryu", password: "123456", profile_img_url: "http://assets.vg247.com/current//2014/07/o7vij6.png"})


Group.create({title: "Addicted to the Shoryuken", description: "Join if you like to dragon punch", organizer_id: User.first.id, image: "http://ih0.redbubble.net/image.6153527.3451/sticker,375x360.png"})

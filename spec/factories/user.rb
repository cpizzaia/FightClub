FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    useremail { Faker::Internet.email}
    password { Faker::Internet.password }
  end
end

FactoryGirl.define do
  factory :event do
    title { Faker::Name.name }
    description { Faker::Lorem.paragraph }
    address { Faker::Address.street_address }
    start_time { Faker::Time.forward }
  end
end

FactoryGirl.define do
  factory :group do
    title { Faker::Name.name }
    description { Faker::Lorem.paragraph }
    city { Faker::Address.city }
    state { Faker::Address.state }
  end
end

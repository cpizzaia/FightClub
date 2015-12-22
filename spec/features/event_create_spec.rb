require "rails_helper.rb"

RSpec.feature "Create Event", js: true, type: :feature do

  describe "The event creation process", type: :feature do

    it "creates an event" do
      sign_in_as_random_user
      create_random_group
      create_random_event
      expect(page).to have_content('Upcoming (1)')
    end
  end
end

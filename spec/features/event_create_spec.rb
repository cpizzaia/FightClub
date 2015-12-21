require "rails_helper.rb"

RSpec.feature "Create Event", js: true, type: :feature do

  describe "The event creation process", type: :feature do

    it "creates an event" do
      @user = create(:user)
      @group = build(:group)
      @event = build(:event)
      sign_in_as(@user)
      create_group(@group)
      create_event(@event)
      expect(page).to have_content('Upcoming (1)')
    end
  end
end

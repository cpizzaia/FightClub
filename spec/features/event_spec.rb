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

  describe "the join/leave process", type: :feature do
    before(:each) do
      @user = create(:user)
      @group = @user.groups_led.create(attributes_for(:group))
      @event = @group.events.create(attributes_for(:event))
      sign_in_as_random_user
      visit "#/groups/#{@group.id}"
      click_button("Join")
      expect(page).to have_button("Leave")
      find(".join-event").click
    end

    it "allows users to join events" do
      expect(page).to have_css("img[src$='#{"ko.gif"}']")
    end

    it "allows users leave events" do
      find(".join-event").click
      expect(page).to have_css("img[src$='#{"fight.gif"}']")
    end
  end
end

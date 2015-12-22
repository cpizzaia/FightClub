require "rails_helper.rb"

RSpec.feature "Group", js: true, type: :feature do

  describe "The group creation process", type: :feature do

    it "creates a group" do
      sign_in_as_random_user
      create_random_group
      expect(page).to have_content('Home')
      expect(page).to have_content('Members')
    end
  end

  describe "The join/leave process", type: :feature do

    before(:each) do
      @user = create(:user)
      @group = @user.groups_led.create(attributes_for(:group))
      sign_in_as_random_user
      visit "#/groups/#{@group.id}"
      click_button("Join")
    end

    it "allows users to join a group" do
      expect(page).to have_content("Leave")
    end

    it "allows users to leave a group" do
      click_button("Leave")
      expect(page).to have_content("Join")
    end
  end
end

require "rails_helper.rb"

RSpec.feature "Create Group", js: true, type: :feature do

  describe "The group creation process", type: :feature do

    it "creates a group" do
      @user = create(:user)
      @group = build(:group)
      sign_in_as(@user)
      create_group(@group)
      expect(page).to have_content('Home')
      expect(page).to have_content('Members')
    end
  end
end

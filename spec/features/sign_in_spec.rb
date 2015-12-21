require "rails_helper.rb"

RSpec.feature "Sign in", js: true, type: :feature do

  describe "The signin process", type: :feature do

    it "signs a user in" do
      @user = create(:user)
      sign_in_as(@user)
      expect(page).to have_css('.toolbar-thumbnail')
    end
  end
end

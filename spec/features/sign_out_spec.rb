require "rails_helper.rb"

RSpec.feature "Sign out", js: true, type: :feature do

  describe "The signout process", type: :feature do

    it "sign out a user" do
      sign_in_as_random_user
      sign_out
      expect(page).not_to have_css(".toolbar-thumbnail")
    end
  end
end

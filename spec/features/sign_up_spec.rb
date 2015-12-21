require "rails_helper.rb"

RSpec.feature "Sign up", js: true, type: :feature do

  describe "The signup process", type: :feature do

    it "sign up a user" do
      @user = build(:user)
      sign_up_as(@user)
      expect(page).to have_content('Update Profile')
      expect(User.where(email: @user.email)).not_to be_nil
    end
  end
end

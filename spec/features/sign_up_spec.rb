require "rails_helper.rb"

RSpec.feature "Sign up", js: true, type: :feature do

  describe "The signup process", type: :feature do

    it "sign up a user" do
      @user = build(:user)
      visit "/"
      find('#sign-up').click
      fill_in 'Name', with: @user.name
      fill_in 'Email', with: @user.email
      fill_in 'Password', with: @user.password
      click_button("Sign Up")
      expect(page).to have_content('Update Profile')
      expect(User.where(email: @user.email)).not_to be_nil
    end
  end
end

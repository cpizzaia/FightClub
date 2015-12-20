require "rails_helper.rb"

RSpec.feature "Sign in", js: true, type: :feature do

  describe "The signin process", type: :feature do

    it "signs a user in" do
      @user = User.create(email: "idk@gmail.com", name: "whocares", password: "123456")
      visit "/"
      find('#sign-in').click
      fill_in 'Email', with: @user.email
      fill_in 'Password', with: @user.password
      click_button("Sign In")
      expect(page).to have_css('.toolbar-thumbnail')
    end
  end
end

require "rails_helper.rb"

RSpec.feature "Sign in", js: true, type: :feature do

  describe "The signin process", type: :feature do

    before(:each) do
      @user = User.create(useremail: "idk@gmail.com", name: "whocares", password: "123456")
    end

    it "signs a user in" do
      visit "/"
      find('#sign-in').click
      fill_in 'Email', with: @user.useremail
      fill_in 'Password', with: @user.password
      click_button("Sign In")
      expect(page).to have_css('.toolbar-thumbnail')
    end
  end
end

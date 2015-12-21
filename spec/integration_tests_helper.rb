module IntegrationTestsHelper
  def sign_in_as(user)
    visit "/"
    find('#sign-in').click
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button("Sign In")
  end

  def sign_up_as(user)
    visit "/"
    find('#sign-up').click
    fill_in 'Name', with: user.name
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button("Sign Up")
  end
end

RSpec.configure do |config|
  config.include IntegrationTestsHelper, type: :feature
end

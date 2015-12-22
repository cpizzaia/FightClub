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

  def create_group(group)
    find("#create-group").click
    fill_in "What is your group's name?", with: group.title
    fill_in "What is your group about?", with: group.description
    fill_in "Where is your group located? (zipcode)", with: "10002"
    click_button("Create Group")
  end

  def create_event(event)
    click_link("Add Event")
    fill_in "Name of event", with: event.title
    fill_in "Description of event", with: event.description
    fill_in "Location of event", with: event.address
    fill_in "Start time of event", with: "01/01/2104, 4:00 AM"
    click_button("Create Event")
  end

  def create_comment(comment)
    find(".comment-create-input").set(comment.body)
    click_button("Submit")
  end

  def sign_in_as_random_user
    @user = create(:user)
    sign_in_as(@user)
  end

  def sign_up_as_random_user
    @user = build(:user)
    sign_up_as(@user)
  end

  def create_random_group
    @group = build(:group)
    create_group(@group)
  end

  def create_random_event
    @event = build(:event)
    create_event(@event)
  end

  def create_random_comment
    @comment = build(:comment)
    create_comment(@comment)
  end

end

RSpec.configure do |config|
  config.include IntegrationTestsHelper, type: :feature
end

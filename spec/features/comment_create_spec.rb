require "rails_helper.rb"

RSpec.feature "Create Comment", js: true, type: :feature do

  describe "The comment creation process", type: :feature do

    it "creates an comment" do
      sign_in_as_random_user
      create_random_group
      create_random_event
      click_link(@event.title)
      create_random_comment
      expect(page).to have_css(".comment-item")
    end
  end
end

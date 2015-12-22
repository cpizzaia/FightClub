require "rails_helper.rb"

RSpec.feature "Create Comment", js: true, type: :feature do

  describe "The comment creation process", type: :feature do

    before(:each) do
      sign_in_as_random_user
      create_random_group
      create_random_event
      click_link(@event.title)
      create_random_comment
    end

    it "creates an comment" do
      expect(page).to have_css(".comment-item")
    end

    it "creates a response" do
      create_random_response
      expect(page).to have_css(".response-container")
    end
  end
end

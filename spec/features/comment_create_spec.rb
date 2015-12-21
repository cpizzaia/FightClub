require "rails_helper.rb"

RSpec.feature "Create Comment", js: true, type: :feature do

  describe "The comment creation process", type: :feature do

    it "creates an comment" do
      @user = create(:user)
      @group = build(:group)
      @event = build(:event)
      @comment = build(:comment)
      sign_in_as(@user)
      create_group(@group)
      create_event(@event)
      click_link(@event.title)
      create_comment(@comment)
      expect(page).to have_css(".comment-item")
    end
  end
end

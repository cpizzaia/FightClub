require "rails_helper.rb"

RSpec.describe Event, type: :model do

  before(:each) do
    @user = create(:user)
    @group = @user.groups_led.create(attributes_for(:group))
    @event = @group.events.create(attributes_for(:event))
    @comment = @event.comments.new(attributes_for(:comment))
    @comment.author_id = @user.id
    @comment.save
    @response = @comment.responses.new(attributes_for(:comment))
    @response.author_id = @user.id
    @response.save
  end

  describe "#author" do
    it "returns the author of the comment" do
      expect(@comment.author).to eq(@user)
    end

    it "belongs_to a user" do
      t = Comment.reflect_on_association(:author)
      expect(t.macro).to eq(:belongs_to)
    end
  end

  describe "#event" do
    it "returns the event the comment was posted in" do
      expect(@comment.event).to eq(@event)
    end

    it "belongs_to a event" do
      t = Comment.reflect_on_association(:event)
      expect(t.macro).to eq(:belongs_to)
    end
  end

  describe "#responses" do
    it "returns the responses to the comment" do
      expect(@comment.responses).to include(@response)
    end

    it "has_many a responses" do
      t = Comment.reflect_on_association(:responses)
      expect(t.macro).to eq(:has_many)
    end
  end

  describe "#parent_comment" do
    it "returns the parent_comment" do
      expect(@response.parent_comment).to eq(@comment)
    end

    it "belongs_to a parent comment" do
      t = Comment.reflect_on_association(:parent_comment)
      expect(t.macro).to eq(:belongs_to)
    end
  end
end

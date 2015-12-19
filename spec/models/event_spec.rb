require "rails_helper.rb"

RSpec.describe Event, type: :model do

  before(:each) do
    @user = create(:user)
    @group = @user.groups_led.create(attributes_for(:group))
    @event = @group.events.create(attributes_for(:event))
  end

  describe "#start_date" do
    it "returns the event start time in day month year format" do
      expect(@event.start_date).to eq(@event.start_time.strftime('%a %b %d'))
    end
  end

  describe "#start_hour" do
    it "returns the event start_time in 12hr clock format with the period" do
      expect(@event.start_hour).to eq(@event.start_time.strftime("%l:%M %p"))
    end
  end

  describe "#create_users_event" do
    it "has the organizer join the create evented" do
      @userevent = UsersEvent.where(user_id: @user.id, event_id: @event.id)
      expect(@userevent).not_to be_nil
    end
  end

  describe "#group" do
    it "returns the group the event is a part of" do
      expect(@event.group).to eq(@group)
    end

    it "it should belong to a group" do
      t = Event.reflect_on_association(:group)
      expect(t.macro).to eq(:belongs_to)
    end
  end

  describe "#users" do
    it "returns the users going to the event" do
      expect(@event.users).to include(@user)
    end

    it "it should have many users" do
      t = Event.reflect_on_association(:users)
      expect(t.macro).to eq(:has_many)
    end
  end
end

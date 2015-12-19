require "rails_helper.rb"

RSpec.describe Group, type: :model do

  describe "#zipcode=" do
    it "sets the city and state based on the zipcode" do
      @group = Group.new
      @group.zipcode = "10002"
      expect(@group.city).to eq("New York")
      expect(@group.state).to eq("NY")
      @group.zipcode = "85251"
      expect(@group.city).to eq("Scottsdale")
      expect(@group.state).to eq("AZ")
    end
  end

  before(:each) do
    @user = create(:user)
    @group = @user.groups_led.create(attributes_for(:group))
  end


  describe "#create_users_group" do
    it "adds the group organizer as a member after_save" do
      @usergroup = UsersGroup.where(group_id: @group.id, user_id: @user.id).first
      expect(@group.id).to eq(@usergroup.group_id)
      expect(@user.id).to eq(@usergroup.user_id)
    end
  end

  describe "#founded" do
    it "returns a string of the groups created at date in month day year format" do
      expect(@group.founded).to eq(@group.created_at.strftime('%b %d %Y'))
    end
  end

  describe "#member_count" do
    it "returns the amount of members in a group" do
      expect(@group.member_count).to eq(@group.members.count)
    end
  end

  describe "#all_users_events" do
    it "returns all the events the user is a part of in a group" do
      3.times do
        @group.events.create(attributes_for(:event))
      end
      expect(@group.all_users_events(@user.id).count).to eq(3)
    end
  end

  describe "#organizer" do
    it "returns the organizer of the group" do
      expect(@group.organizer).to eq(@user)
    end

    it "it should only have one organizer" do
      t = Group.reflect_on_association(:organizer)
      expect(t.macro).to eq(:belongs_to)
    end
  end

  describe "#members" do
    it "returns the members of the group" do
      expect(@group.members).to include(@user)
    end

    it "should have many members" do
      t = Group.reflect_on_association(:members)
      expect(t.macro).to eq(:has_many)
    end
  end

  describe "#events" do
    it "returns the events of the group" do
      @event = @group.events.create(attributes_for(:event))
      expect(@group.events).to include(@event)
    end

    it "should have events" do
      t = Group.reflect_on_association(:events)
      expect(t.macro).to eq(:has_many)
    end
  end
end

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

  describe "#create_users_group" do
    it "adds the group organizer as a member after_save" do
      @user = create(:user)
    end
  end
end

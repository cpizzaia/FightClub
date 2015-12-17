require "rails_helper.rb"

RSpec.describe User, type: :model do

  describe ".find_by_credentials" do
    before(:each) do
      @user = create(:user)
    end

    it "returns the correct user given an email and password" do
      result = User.find_by_credentials(@user.useremail, @user.password)
      expect(result).to eq(@user)
    end
  end

  describe "#groups_led" do
    before(:each) do
      @user = create(:user)
      @group = Group.new(attributes_for(:group))
      @group.organizer_id = @user.id
      @group.save
    end

    it "should have many groups_led" do
      t = User.reflect_on_association(:groups_led)
      expect(t.macro).to eq(:has_many)
    end

    it "returns the groups where the user is the organizer" do
      expect(@user.groups_led).to include(@group)
    end
  end

  describe "groups_where_not_organizer" do
    before(:each) do
      @user = create(:user)
      @group = @user.groups_led.create(attributes_for(:group))
      @user2 = create(:user)
      @group2 = @user2.groups_led.create(attributes_for(:group))
    end

    it "returns the groups the user is not the organizer" do
      expect(@user2.groups_led).not_to include(@group)
      expect(@user2.groups_led).to include(@group2)
    end
  end

  describe "#groups" do
    before(:each) do
      @user = create(:user)
      @group = @user.groups_led.create(attributes_for(:group))
      @user2 = create(:user)
      @group2 = @user2.groups_led.create(attributes_for(:group))
    end

    it "user should have many groups" do
      t = User.reflect_on_association(:groups)
      expect(t.macro).to eq(:has_many)
    end

    it "returns groups the user is part of" do
      expect(@user.groups).to include(@group)
    end

    it "does not return groups the user is not a part of" do
      expect(@user.groups).not_to include(@group2)
    end
  end
end

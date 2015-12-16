require "rails_helper.rb"

RSpec.describe User, :type => :model do

  describe "self.find_by_credentials" do

    before(:all) do
      @user = create(:user)
    end

    it "returns the correct user given an email and password" do
      result = User.find_by_credentials(@user.useremail, @user.password)
      expect(result).to eq(@user)
    end
  end
end

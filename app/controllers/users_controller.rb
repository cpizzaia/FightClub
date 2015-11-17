class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to "/"
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:useremail, :name, :password, :profile_img_url)
  end

end

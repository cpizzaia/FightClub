class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    byebug
    if @user.save
      login(@user)
      redirect_to "/"
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:useremail, :name, :password)
  end

end

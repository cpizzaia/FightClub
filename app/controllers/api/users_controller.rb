class Api::UsersController < ApplicationController



  def show
    @user = current_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to "#/users/new"
    end
  end


  def update
    current_user.update!(user_params)
    @user = current_user
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:name, :useremail, :password, :email, :profile_img)
  end



end

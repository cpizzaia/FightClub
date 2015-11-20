class Api::UsersController < ApplicationController



  def show
    @user = current_user
  end


  def update
    current_user.update!(user_params)
    @user = current_user
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:name, :profile_img)
  end



end

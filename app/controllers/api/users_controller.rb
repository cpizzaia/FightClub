class Api::UsersController < ApplicationController



  def show
    if params[:id] == "current_user"
      @user = current_user
    else
      @user = User.find(params[:id])
    end
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
    params.require(:user).permit(:name, :email, :password, :email, :profile_img)
  end



end

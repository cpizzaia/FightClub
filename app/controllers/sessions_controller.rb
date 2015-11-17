class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:useremail],
      params[:user][:password]
    )
    if @user.nil?
      render :new
    else
      login(@user)
      redirect_to new_user_url
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end

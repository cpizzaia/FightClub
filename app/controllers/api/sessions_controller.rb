class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    byebug
    @user = User.find_by_credentials(
      params[:user][:useremail],
      params[:user][:password]
    )
    if @user.nil?
      render :new
    else
      login(@user)
      redirect_to "/"
    end
  end

  def destroy
    logout
    render json: {}
  end

end

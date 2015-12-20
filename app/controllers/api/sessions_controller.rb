class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user.nil?
      render :new
    else
      login(@user)
      render :show
    end
  end

  def destroy
    logout
    render json: {}
  end

end

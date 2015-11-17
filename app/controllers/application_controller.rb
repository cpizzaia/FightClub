class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def require_current_user
    if current_user.nil?
      redirect_to new_session_url
    end
  end

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    session[:session_token] = nil
  end
end

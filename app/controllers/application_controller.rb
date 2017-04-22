class ApplicationController < ActionController::Base
  add_flash_types :error, :notice

  protect_from_forgery with: :exception

  before_action :authenticate_user!

  helper_method def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method def logged_in?
    !!current_user
  end

  protected

  def authenticate_user!
    redirect_to root_path unless logged_in?
  end

  def init_session(user)
    session[:user_id] = user.id
  end
end

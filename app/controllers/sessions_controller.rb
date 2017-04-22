class SessionsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @user = User.new
  end

  def create
    user = User.find_by(user_params)

    if user
      init_session(user)
      redirect_to dashboards_path
    else
      redirect_to login_path, notice: 'User does not exist'
    end
  end

  def destroy
    reset_session
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end

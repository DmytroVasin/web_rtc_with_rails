class RegistrationsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)

    if user.save
      init_session(user)
      redirect_to dashboards_url
    else
      redirect_to signup_path, notice: user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end

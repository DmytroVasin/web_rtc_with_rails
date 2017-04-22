module ApplicationCable
  class UsersIgnoreToChannel < ActionCable::Channel::Base

    def subscribed
      user_id = params[:user_id]

      stream_from("ignore_to_#{user_id}")
    end

  end
end

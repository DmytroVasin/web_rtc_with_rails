module ApplicationCable
  class UsersStopCallToChannel < ActionCable::Channel::Base

    def subscribed
      user_id = params[:user_id]

      stream_from("stop_call_to_#{user_id}")
    end

  end
end

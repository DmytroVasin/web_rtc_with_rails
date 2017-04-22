module ApplicationCable
  class UsersStopCallToChannel < ActionCable::Channel::Base

    def subscribed
      token = params[:token]

      stream_from("stop_call_to_#{token}")
    end

  end
end

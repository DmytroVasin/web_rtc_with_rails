module ApplicationCable
  class UsersCallToChannel < ActionCable::Channel::Base

    def subscribed
      token = params[:token]

      stream_from("call_to_#{token}")
    end

  end
end

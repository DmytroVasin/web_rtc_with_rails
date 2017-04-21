module ApplicationCable
  class UsersIgnoreToChannel < ActionCable::Channel::Base

    def subscribed
      token = params[:token]

      stream_from("ignore_to_#{token}")
    end

  end
end

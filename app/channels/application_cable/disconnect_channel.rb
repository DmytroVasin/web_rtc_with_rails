module ApplicationCable
  class DisconnectChannel < ActionCable::Channel::Base

    def subscribed
      user_id = params[:user_id]

      stream_from("disconnect_#{user_id}")
    end

  end
end

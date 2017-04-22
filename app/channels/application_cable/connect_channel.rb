module ApplicationCable
  class ConnectChannel < ActionCable::Channel::Base

    def subscribed
      user_id = params[:user_id]

      stream_from("connect_#{user_id}")
    end

  end
end

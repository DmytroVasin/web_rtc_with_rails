module ApplicationCable
  class UsersCallToChannel < ActionCable::Channel::Base

    def subscribed
      user_id = params[:user_id]

      stream_from("call_to_#{user_id}")
    end

  end
end

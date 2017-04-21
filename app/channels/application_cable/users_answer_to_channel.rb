module ApplicationCable
  class UsersAnswerToChannel < ActionCable::Channel::Base

    def subscribed
      token = params[:token]

      stream_from("answer_to_#{token}")
    end

  end
end

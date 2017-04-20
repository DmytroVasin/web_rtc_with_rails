module ApplicationCable
  class UsersChannel < ActionCable::Channel::Base
    def subscribed
      stream_from 'users'
    end
  end
end

class DashboardsController < ApplicationController

  def index
  end

  def call
    reciver = User.find(params[:to])

    ActionCable.server.broadcast "call_to_#{reciver.id}", { name: current_user.name , caller_id: current_user.id }
  end

  def stop
    reciver = User.find(params[:to])

    ActionCable.server.broadcast "stop_call_to_#{reciver.id}", {}
  end

  def connect
    _caller = User.find(params[:to])
    _callee = current_user

    room = SecureRandom.hex

    ActionCable.server.broadcast "connect_#{_caller.id}", { room: room, user_ids: [_caller.id, _callee.id]}
    ActionCable.server.broadcast "connect_#{_callee.id}", { room: room, user_ids: [_caller.id, _callee.id]}
  end

  def disconnect
    user_ids = params[:user_ids].split(',')
    users = User.where(id: user_ids)

    users.each do |user|
      ActionCable.server.broadcast "disconnect_#{user.id}", {}
    end
  end

  def ignore
    reciver = User.find(params[:to])

    ActionCable.server.broadcast "ignore_to_#{reciver.id}", {}
  end

  helper_method def users
    @users ||= User.all
  end

end

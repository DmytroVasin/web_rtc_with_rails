class RoomsController < ApplicationController

  def index
    @rooms = Room.all
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)

    if @room.save
      redirect_to room_path(@room)
    else
      render :new
    end
  end

  def show
    @room = Room.find(params[:id])
  end

  # def call
    # ApplicationCable::UsersChannel.broadcast_to('user_123', { title: 'New things!', body: 'All the news that is fit to print' })
    # ActionCable.server.broadcast 'user_123', { title: 'New things!', body: 'All the news that is fit to print' }
  # end

  private

  def room_params
    params.require(:room).permit(:name)
  end
end

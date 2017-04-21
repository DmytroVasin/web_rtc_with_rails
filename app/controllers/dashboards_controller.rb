class DashboardsController < ApplicationController
  def show
    @current_user = User.find_by(token: params[:id])
    @token = params[:id]
  end

  def call
    _callee = params[:callee]
    _caller = params[:caller]
    ActionCable.server.broadcast "call_to_#{_callee}", { callee: _callee , caller: _caller }
  end

  def answer
    _callee = params[:callee]
    _caller = params[:caller]

    ActionCable.server.broadcast "answer_to_#{_caller}", { callee: _callee , caller: _caller }
    ActionCable.server.broadcast "answer_to_#{_callee}", { callee: _callee , caller: _caller }
  end
end

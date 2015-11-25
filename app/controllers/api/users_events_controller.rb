class Api::UsersEventsController < ApplicationController

  def create
    @users_event = current_user.users_events.new(event_id: params[:event_id])
    if @users_event.save
      @event = @users_event.event
      render "api/events/show"
    else
      flash[:errors] = @event.errors.full_messages
    end
  end

  def destroy
    @users_event = UsersEvent.where({event_id: params[:id], user_id: current_user.id}).first
    @event = @users_event.event
    @users_event.destroy
    render "api/events/show"
  end

end

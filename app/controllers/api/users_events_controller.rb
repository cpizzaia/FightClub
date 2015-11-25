class Api::UsersEventsController < ApplicationController

  def create
    if user_included_in_group?
      @users_event = current_user.users_events.new(event_id: params[:event_id])
      if @users_event.save
        @event = @users_event.event
        render "api/events/show"
      else
        flash[:errors] = @event.errors.full_messages
      end
    end
  end

  def destroy
    if user_is_not_organizer?
      current_user == Event.find(params[:id]).group.organizer_id
      @users_event = UsersEvent.where({event_id: params[:id], user_id: current_user.id}).first
      @event = @users_event.event
      @users_event.destroy
      render "api/events/show"
    end
  end

  private

  def user_included_in_group?
    Event.find(params[:event_id]).group.members.include?(current_user)
  end

  def user_is_not_organizer?
    current_user.id != Event.find(params[:id]).group.organizer_id
  end

end

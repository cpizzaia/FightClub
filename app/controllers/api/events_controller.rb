class Api::EventsController < ApplicationController



  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    if current_user_is_organizer?
      @event = Event.new(event_params)
      if @event.save
        render :show
      end
    end
  end

  private

  def event_params
    params.require(:event).permit(:group_id, :title, :description, :address, :start_time)
  end

  def current_user_is_organizer?
    current_user.id == Group.find(event_params[:group_id]).organizer_id
  end

end

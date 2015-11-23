class Api::GroupsController < ApplicationController



  def index
    @groups = Group.all
  end

  def show
    @group = Group.find(params[:id])
  end

  def create
    byebug
    @group = current_user.groups_led.new(group_params)
    if @group.save
      render :show
    else
      flash[:errors] = @group.errors.full_messages
    end
  end

  private
  def group_params
    params.require(:group).permit(:title, :description, :zipcode, :group_img)
  end
end

class Api::GroupsController < ApplicationController



  def index
    @groups = Group.all
  end

  def show
    @group = Group.find(params[:id])
  end

  def create
    @group = current_user.groups_led.new(group_params)
    if @group.save
      @usersgroup = current_user.users_groups.new({group_id: @group.id})
      @usersgroup.save
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

class Api::UsersGroupsController < ApplicationController

  def create
    @users_group = current_user.users_groups.new(group_id: users_group_params[:group_id])
    if @users_group.save
      @group = @users_group.group
      render "api/groups/show"
    else
      flash[:errors] = @group.errors.full_messages
    end
  end

  def destroy
    @users_group = UsersGroup.where({group_id: params[:id], user_id: current_user.id}).first
    @group = @users_group.group
    @group.all_users_events(current_user.id).destroy_all
    @users_group.destroy
    render "api/groups/show"
  end

  private
  def users_group_params
    params.require("users_group").permit(:user_id, :group_id)
  end

end

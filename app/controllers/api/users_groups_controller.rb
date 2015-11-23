class Api::UsersGroupsController < ApplicationController

  def create
    @users_groups = current_user.users_groups.new(group_id: params[:users_groups][:group_id])
    if @users_groups.save
      @group = @users_groups.group
      render "api/groups/show"
    else
      flash[:errors] = @group.errors.full_messages
    end
  end

end

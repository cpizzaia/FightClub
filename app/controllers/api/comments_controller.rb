class Api::CommentsController < ApplicationController



  def index
    @comments = Comment.where(event_id: 1)
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.save
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:event_id, :body, :parent_comment_id)
  end

end

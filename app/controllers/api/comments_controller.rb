class Api::CommentsController < ApplicationController



  def index
    @comments = Comment.where(event_id: 1)
  end

end

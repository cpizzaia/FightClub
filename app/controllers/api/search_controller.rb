class Api::SearchController < ApplicationController


  def index
    @groups = PgSearch.multisearch([params[:query]]).includes(:searchable)
    render :index
  end


end

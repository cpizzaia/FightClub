class Api::SearchController < ApplicationController


  def show
    @groups = PgSearch.multisearch([params[:id]]).includes(:searchable)
    render :index
  end


end

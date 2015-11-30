class Api::SearchController < ApplicationController


  def show
    @groups = PgSearch.multisearch([params[:id]])
    render :index
  end


end

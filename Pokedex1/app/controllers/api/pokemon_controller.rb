class Api::PokemonController < ApplicationController
  #plural
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    # @items = @pokemon.items
    render :show
  end
end

class Api::V1::PizzasController < ApplicationController

  # GET /api/v1/pizzas
  def index
    render json: Pizza.all
  end
end

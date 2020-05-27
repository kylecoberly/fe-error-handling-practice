class ApplesController < ApplicationController
  def index
    render status: :unauthorized
  end

  def show
    render status: :bad_request
  end

  def create
    render status: :ok
  end

  def patch
    render status: :moved_permanently
  end

  def delete
    render status: :internal_server_error
  end
end

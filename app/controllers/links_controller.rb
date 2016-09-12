class LinksController < ApplicationController

  before_action :require_login

  def index
    @links = @current_user.links
  end

  def create
    @link = @current_user.links.new(link_params)
    if @link.save
      flash[:success] = "Link added!"
      redirect_to links_path
    else
      flash[:warning] = @link.errors.full_messages.join(", ")
      redirect_to links_path
    end
  end

  private
    def link_params
      params.require(:link).permit(:title, :url)
    end

    def require_login
      unless current_user
        flash[:warning] = "Login to view your links."
        redirect_to login_path
      end
    end
end

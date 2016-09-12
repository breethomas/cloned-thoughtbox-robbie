class LinksController < ApplicationController

  before_action :require_login

  def index
    @links = current_user.links
  end

  def create
    @link = current_user.links.new(link_params)
    if @link.save
      flash[:success] = "Link added!"
      redirect_to links_path
    else
      flash[:warning] = @link.errors.full_messages.join(", ")
      redirect_to links_path
    end
  end

  def edit
    @link = Link.find(params[:id])
  end

  def update
    @link = Link.find(params[:id])
    if request.xhr?
      @link.update(link_params)
    else
      if @link.update(link_params)
        flash[:success] = "Link edited!"
        redirect_to links_path
      else
        flash.now[:warning] = @link.errors.full_messages.join(", ")
        render :edit
      end
    end
  end

  private
    def link_params
      params.require(:link).permit(:title, :url, :read)
    end

    def require_login
      unless current_user
        flash[:warning] = "Login to view your links."
        redirect_to login_path
      end
    end
end

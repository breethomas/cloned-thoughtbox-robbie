class LinksController < ApplicationController

  before_action :require_login

  def index
  end

  private
    def require_login
      unless current_user
        flash[:warning] = "Login to view your links."
        redirect_to login_path
      end
    end
end

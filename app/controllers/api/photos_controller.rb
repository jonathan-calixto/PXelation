class Api::Controller < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def index
        @photos = Photo.all
        render = 'api/photos/index'
    end

    def create
        @photo = Photo.find(params[:id])
    end

    def show
        @photo = Photo.new(photo_params)
        if @photo.save && @photo.photographer_id == current_user.id
            render 'api/photos/show'
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        @photo = Photo.find(params[:photo][:id])
        if @photo.update(photo_params) && @photo.photographer_id == current_user.id
            render 'api/photos/show'
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy
        @photo = Post.fin(params[:id])
        if @photo.photographer_id == current_user.id
            @photo.destroy
            render 'api/posts/show'
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :location, :photographer_id, :photograph)
    end

end
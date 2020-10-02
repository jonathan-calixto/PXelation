class Api::PhotosController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def index
        @photos = Photo.with_attached_photo.all
        render = 'api/photos/index'
    end

    def show
        @photo = Photo.with_attached_photo.find(params[:id])
        render 'api/photos/show'
    end

    def create
        @photo = Photo.new(photo_params)
        
        if @photo.save && @photo.photographer_id == current_user.id
            render 'api/photos/show'
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        @photo = Photo.find(params[:id])
        if @photo.photographer_id == current_user.id && @photo.update(photo_params)
            render 'api/photos/show'
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy
        @photo = Photo.find(params[:id])
        if @photo.photographer_id == current_user.id
            @photo.destroy
            render 'api/photos/show'
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :location, :photographer_id, :photo)
    end
end
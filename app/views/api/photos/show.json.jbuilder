json.partial! 'api/photos/photo', photo: @photo
json.photoUrl url_for(@photo.photo)
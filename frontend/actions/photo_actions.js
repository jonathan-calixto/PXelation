import * as PhotoAPIUtils from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});
const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});
const removePhoto = photoId => ({
    type: REMOVE_PHOTO,
    photoId
});

export const fetchPhotos = () => dispatch => (
    PhotoAPIUtils.fetchPhotos().
        then(photos => dispatch(receivePhotos(photos)))
);
export const fetchPhoto = (photoId) => dispatch => (
    PhotoAPIUtils.fetchPhoto(photoId).
        then(photo => dispatch(receivePhoto(photo)))
);
export const createPhoto = (photo) => dispatch => (
    PhotoAPIUtils.createPhoto(photo).
        then(photo => dispatch(receivePhoto(photo)))
);
export const updatePhoto = (photo) => dispatch => (
    PhotoAPIUtils.updatePhoto(photo).
        then(photo => dispatch(receivePhotos(photo)))
);
export const deletePhoto = (photoId) => dispatch => (
    PhotoAPIUtils.deletePhoto(photoId).
        then(photoId => dispatch(removePhoto(photoId)))
);
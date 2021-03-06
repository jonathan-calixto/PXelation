import {RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO} from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            return Object.assign({}, state, {[action.photo.id]: action.photo});
        case REMOVE_PHOTO:
            delete newState[action.reportId];
            return newState;
        default:
            return state;
    }
};

export default PhotosReducer;
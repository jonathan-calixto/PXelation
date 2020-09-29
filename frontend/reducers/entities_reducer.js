import { combineReducers } from 'redux';

import { usersReducer } from './users_reducer';
import PhotosReducer from './photos_reducer';

export const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: PhotosReducer
});


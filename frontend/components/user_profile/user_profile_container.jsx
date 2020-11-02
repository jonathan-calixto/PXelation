import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import UserProfile from './user_profile';


const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        photos: Object.values(state.entities.photos)
    };
};

const mDTP = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos()) 
    };
};

export default connect(mSTP, mDTP)(UserProfile);
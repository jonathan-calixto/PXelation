import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';


const mSTP = state => ({
    photo: {
        title: '',
        description: '',
        location: '',
        photographer_id: state.session.id,
        photoFile: null,
        photoUrl: null
    },
    formType: 'Upload New Photo'
});

const mDTP = dispatch => ({
    createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mSTP, mDTP)(PhotoUpload);
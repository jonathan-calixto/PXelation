import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../util/photo_api_util';
import PhotoUpload from './photo_upload';


const mSTP = ({ session }) => ({
    photo: {
        title: '',
        description: '',
        location: '',
        photographer_id: session.id,
        photoFile: null,
        photoUrl: null
    },
    formType: 'Upload New Photo'
});

const mDTP = dispatch => ({
    createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mSTP, mDTP)(PhotoUpload);
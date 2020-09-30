import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';


const mSTP = (state, ownProps) => {
    debugger
    return {photo: state.entities.photos[ownProps.match.params.photoId]};
};

const mDTP = dispatch => ({
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
});

export default connect(mSTP, mDTP)(PhotoShow);

// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchPhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';
// import PhotoEdit from './edit_photo_container';

// class EditPhotoForm extends React.Component {

//     componentDidMount() {
//         return this.props.fetchPhoto(this.props.match.params.photoId);
//     }

//     render() {
//         const { photo, updatePhoto, deletePhoto } = this.props;

//         return (
//             <PhotoEdit
//                 photo={photo}
//                 deletePhoto={deletePhoto}
//                 updatePhoto={updatePhoto}
//             />
//         )
//     }
// }

// const mSTP = (state, ownProps) => {
//     return {photo: state.entities.photos[ownProps.match.params.photoId],
//     formType: 'Update Photo'};
// };

// const mDTP = dispatch => ({
//     fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
//     updatePhoto: photo => dispatch(updatePhoto(photo)),
//     deletePhoto: photoId => dispatch(deletePhoto(photoId))
// });

// export default connect(mSTP, mDTP)(EditPhotoForm);
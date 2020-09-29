import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, deletePhoto} from '../../actions/photo_actions';

const mSTP = state => ({
    photos: Object.values(state.entities.photos)
});

const mDTP = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(mSTP, mDTP)(PhotoIndex);
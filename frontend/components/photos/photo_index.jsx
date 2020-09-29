import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

export default class PhotoIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        const { photos, deletePhoto } = this.props;

        return (
            <div>
                <ul className='photo-profile-div'>
                    {photos.map(photo => {
                        return <PhotoIndexItem 
                                photo={photo}
                                deletePhoto={deletePhoto}
                                key={photo.id}
                        />
                    })}
                </ul>
                <Link to='/photos/upload'>Upload a New Photo</Link>
            </div>
        )
    }
}
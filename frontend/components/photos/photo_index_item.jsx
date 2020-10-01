import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => {
    return(
        <li className='lli-container'>
            <div className='photo-preview-index'>
                <Link to={`/photos/${props.photo.id}`}><img src={props.photo.photoUrl} /></Link>
            </div>
        </li>
    )
}

export default PhotoIndexItem;
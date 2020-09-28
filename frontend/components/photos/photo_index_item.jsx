import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => {
    return(
        <li>
            <Link to={`/photos/${props.photo.id}`}>{props.photo.title}</Link>
            <Link to={`/photos/${props.photo.id}/edit`}>Edit Photo</Link>
            <button onClick={() => props.deletePhoto(props.photo.id)}>Delete Photo</button>
        </li>
    )
}

export default PhotoIndexItem;
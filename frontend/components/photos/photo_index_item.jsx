import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => {
    // const preview = props.photo.photoUrl ? <img src={props.photo.photoUrl} /> : null;
    return(
        <li>
            <div className='photo-preview-index'>
                <Link to={`/photos/${props.photo.id}`}><img src={props.photo.photoUrl} /></Link>
            </div>
            Title: {props.photo.title} <br/>
            Description: {props.photo.description} <br/>
            Location: {props.photo.location} <br/>
            <Link to={`/photos/${props.photo.id}/edit`}>Edit Photo</Link> <br/>
            <button onClick={() => props.deletePhoto(props.photo.id)}>Delete Photo</button>
        </li>
    )
}

export default PhotoIndexItem;
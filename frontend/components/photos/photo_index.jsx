import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import Masonry from "react-masonry-css";


export default class PhotoIndex extends React.Component {
    constructor(props){
        super(props);
        this.shufflePhotos = this.shufflePhotos.bind(this);
    }
    componentDidMount(){
        this.props.fetchPhotos();
    }

    shufflePhotos(photos){
        photos.sort(() => Math.random() - 0.5);
    }

    render() {
        const { photos, deletePhoto } = this.props;
        debugger
        return (
            <div className='photo-container-div'>
                <div>
                    <Masonry 
                        className='photo-index-masonry' 
                        breakpointCols={{default: 5, 1000: 4, 800: 2}} 
                        columnClassName='masonry-grid-column'
                    >
                        {photos.map(photo => {
                            return <PhotoIndexItem 
                                    photo={photo}
                                    deletePhoto={deletePhoto}
                                    key={photo.id}
                            />
                        })}
                    </Masonry>
                </div>
            </div>
        )
    }
}
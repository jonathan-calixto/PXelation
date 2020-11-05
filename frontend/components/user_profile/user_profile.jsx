import React from 'react';
import UserPhotosItemContainer from './user_photos_item_container';
import Masonry from 'react-masonry-css';

export default class UserProfile extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPhotos();
    }

    render(){
        const { photos, currentUser } = this.props;
        let userPhotos = photos.filter(photo => photo.photographer_id === currentUser.id);

        return(
            <div className='top-profile-div'>
                <div className='profile-header-div'>
                    <div>
                        <div className='profile-info-div'>
                            <p><i className="fas fa-user-circle"></i></p>
                            <h1>{currentUser.username}</h1>
                        </div>
                        <div className='categories-div'>
                            <p>Photos</p>
                            <p>Galleries</p>
                        </div>
                    </div>
                </div>

                <div className='container-div'>
                    <div className='photo-container-div'>
                        <Masonry
                            className='photo-index-masonry'
                            breakpointCols={{
                                default: 5,
                                1000: 4,
                                800: 2
                            }}
                            columnClassName='masonry-grid-column'
                        >
                            {userPhotos.map(photo => {
                                return <UserPhotosItemContainer
                                    photo={photo}
                                    key={photo.id}
                                />
                            })}
                        </Masonry>
                    </div>
                </div>
            </div>
        );
    }
}
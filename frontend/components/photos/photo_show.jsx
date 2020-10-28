import React from 'react';
import {Link} from 'react-router-dom';

export default class PhotoShow extends React.Component {

    constructor(props) {
        super(props);
        this.openFullscreen = this.openFullscreen.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    openFullscreen(){
        var elem = document.getElementById('fullscreen-image');
        if(elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }


    render() {
        const { photo, currentUserId, updatePhoto } = this.props;
        if (!photo) {
            return null;
        }

        // let editButton = photo.photographer_id === currentUserId ? <Link to={`/photos/${photo.id}/edit`}><i className="fab fa-flickr">Edit</i></Link> : null;

        return (
            <div>
                <div className='grey-black-bgr'>
                    <div className='image-container-div' id='fullscreen-image'>
                        <div className='image-icon-div'>
                            <Link to='/photos/'><i className="fas fa-arrow-left"></i></Link>
                            <button className='fullscreen' onClick={this.openFullscreen}><i className="fas fa-expand-alt"></i></button>
                        </div>
                        
                        <img className='img-tag' src={photo.photoUrl} />
                    </div>
                </div>
                
                <div className='main-container-div'>
                    <div className='info-container-div'>
                        <div className='icon-container-div'><i className="far fa-heart"></i><i className="far fa-plus-square"></i><i className="fas fa-share-alt-square"></i><Link to={`/photos/${photo.id}/edit`}><i className="fab fa-flickr">Edit</i></Link></div>
                        <div className='profile-info-div'>
                        
                            <div className='profile-img-div'>
                                <Link to='/photos/'><i className="fas fa-user-circle"></i></Link>
                            </div>

                            <div className='title-user-div'>
                                <h1>{photo.title}</h1>
                                <p>by (need to add user to props)</p>
                            </div> 
                        </div>

                        <div className='location-div'>
                            <p><i className="fas fa-map-marker-alt"></i> {photo.location}</p>
                        </div>
                        <div className='description-div'>
                            <p>{photo.description}</p>
                        </div>
                    </div>

                    <div className='comments-container-div'>
                        <div className='comment-padding-div'>
                            <h1>Comments</h1>
                            <form>
                                <label><Link to='/photos/'><i className="fas fa-user-circle"></i></Link><textarea type="text" placeholder='Add a comment'/></label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
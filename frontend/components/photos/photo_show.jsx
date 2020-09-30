import React from 'react';
import {Link} from 'react-router-dom';

export default class PhotoShow extends React.Component {

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    // componentDidUpdate() {
    //     if (!photo) {
    //         this.props.fetchPhoto(this.props.match.params.photoId);
    //     }
    // }


    render() {
        const { photo } = this.props;
        // const fullPhoto = photo.photoUrl ? <img src={photo.photoUrl} /> : null
        // if (!photo) {
        //     return null;
        // }
        return (
            <div>
                <div className='grey-black-bgr'>
                    <div className='image-container-div'>
                        <img src={photo.photoUrl} />
                    </div>
                </div>

                <div className='main-container-div'>
                    <div className='info-container-div'>
                        <div className='icon-container-div'><i className="far fa-heart"></i><i className="far fa-plus-square"></i><i className="fas fa-share-alt-square"></i></div>
                        <div className='profile-info-div'>
                        
                            <div className='profile-img-div'>
                                <Link to='/photos/'><i className="fas fa-user-circle"></i></Link>
                            </div>

                            <div className='title-user-div'>
                                <h1>{photo.title}</h1>
                                <p>by</p>
                            </div> 
                        </div>

                        <div>
                            <p><i className="fas fa-map-marker-alt"></i> {photo.location}</p>
                        </div>
                        <div>
                            <p>{photo.description}</p>
                        </div>
                    </div>

                    <div className='comments-container-div'>
                        <h1>Comments</h1>
                        <form>
                            <label><Link to='/photos/'><i className="fas fa-user-circle"></i></Link><input type="text" placeholder='Add a comment'/></label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
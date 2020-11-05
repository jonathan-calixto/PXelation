import React from 'react';

const homeFeed = () => (
    <div>
        <div className='feed-header-div'>
            <div className='inner-header-div'>
                <div>
                    <h1 className='home-feed-div'>Home Feed</h1>
                    <p className='header-p-tag'>See photos and published Galleries from people you follow.</p>
                </div>
            </div>
            <div>
                <h3 className='home-feed-button-div'>Home</h3>
            </div>
        </div>
        <div className='feed-body-div'>
            <div className='centering-body-div'>
                <div className='welcome-header-div'>
                    <div>
                        <h3>Welcome to PXelation!</h3>
                        <p>Follow photographers to get started</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Explore the community</h3>
                        <p>Discover photos from all over the world</p>
                    </div>
                    <div>
                        <h3>Editor's Choice</h3>
                        <p>Photo's Selected by our Editors</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default homeFeed;
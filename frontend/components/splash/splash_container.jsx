import React from 'react';
import {Link} from 'react-router-dom';

export default class SplashPageContainer extends React.Component {
    render(){
        return (
            <div>
                <div className='background-img'>
                    <h1><span>Discover and share the world''s best photos.</span></h1>
                    <p><span>Get inspired with incredible photos from diver styles and genres around the world. We&#39;re not guided by fads-just great photography.</span></p>
                    <Link to='/signup/' className='signup-button'>Sign Up</Link>
                </div>

                <div className='splash-triple-container'>
                    <div className='text-boxes'>
                        <img src="/assets/leaf.png" />
                        <span><h1>Grow as a photographer</h1></span>
                        <br/>
                        <span>
                            Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.
                        </span>
                    </div>
                    <div className='text-boxes'>
                        <img src="/assets/ruler.png" />
                        <span><h1>Build your career</h1></span>
                        <br/>
                        <span>
                            Present yourself as a professional. Get hired by displaying your services, create a Directory listing, showcase the workshops you're holding, and create Galleries to highlight your work.
                        </span>
                    </div>
                    <div className='text-boxes'>
                        <img src="/assets/graph.png" />
                        <span><h1>See how you&#39;re performing</h1></span>
                        <br/>
                        <span>
                            With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.
                        </span>
                    </div>
                </div>

                <footer> {/*center the div that exists here,  flex and space between*/}
                    <div className='splash-footer'>
                        <div className='copyright'>
                            <span>
                                <h2><i className="far fa-copyright"></i>PXelation</h2>
                            </span>
                        </div>
                        <div className='triple-links'>
                            <span className='footer-link'><a href="https://www.linkedin.com/in/calixtojonathan/">LinkedIn</a></span>
                            <span className='footer-link'><a href="https://github.com/Serendipitydeus/PXelation">GitHub</a></span>
                            <span className='footer-link'><a href="">Jonathan Calixto</a></span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}


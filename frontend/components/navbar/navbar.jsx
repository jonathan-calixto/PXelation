import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <div className='user-nav nav-header'>
                <h3>PXelation</h3>
                <Link className='nav-link' to=''>
                    Discover <i className="fas fa-chevron-down"></i>
                    <div>

                    </div>
                </Link>
                <Link className='nav-link' to=''>Licensing <i className="fas fa-chevron-down"></i></Link>
                <Link className='nav-link' to=''>Memberships</Link>
                <Link className='nav-link' to=''>Quests</Link>
                <Link className='nav-link' to=''>Creator Stories</Link>
                <Link className='nav-link' to=''>Blog</Link>
            </div>
        )
    }
}

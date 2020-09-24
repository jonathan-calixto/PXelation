import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
        const {currentUser, logout, clearErrors} = this.props;

        const sessionLogin = () => (
            <div className='nav-login'>
                <input className='search-bar' type="text" placeholder='Search PXelation'/>
                <br/>
                <Link className='nav-Link' to='/login/' onClick={clearErrors}><span className='login-link'>Log in</span></Link>
                <br/>
                <Link className='nav-Link' to='/signup/' onClick={clearErrors}><span className='signup-link'>Sign up</span></Link>
            </div>
        )

        const sessionLogout = () => (
            <div className='nav-login'>
                <input className='search-bar' type="text" placeholder='Search PXelation'/>
                <button onClick={logout}><i class="fas fa-sign-out-alt"></i></button>
                <button className='button-link button-user'><i class="fas fa-user-circle"></i></button>
                <button className='button-link'><i class="far fa-paper-plane"></i></button>
                <button className='button-link'><i class="far fa-bell"></i></button>
                <button className='button-upload'><i class="fas fa-arrow-up"></i> Upload</button>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

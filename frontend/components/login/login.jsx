import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
        const {currentUser, logout} = this.props;

        const sessionLogin = () => (
            <div className='session-login'>
                <input type="text" placeholder='Search PXelation' className='search-bar' />
                <br/>
                <Link className='login-button' to='/login/'>Log in</Link>
                <br/>
                <Link className='signup-button' to='/signup/'>Sign up</Link>
            </div>
        )

        const sessionLogout = () => (
            <div className='session-login'>
                <input type="text" placeholder='Search PXelation' className='search-bar' />
                <button className='slogout' onClick={logout}><i class="fas fa-sign-out-alt"></i></button>
                <button className='login-icon' ><i class="fas fa-user-circle"></i></button>
                <button className='login-icon' ><i class="far fa-paper-plane"></i></button>
                <button className='login-icon' ><i class="far fa-bell"></i></button>
                <button className='sessionUpload' ><i class="fas fa-arrow-up"></i> Upload</button>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

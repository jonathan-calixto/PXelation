import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
        const {currentUser, logout} = this.props;

        const sessionLogin = () => (
            <div className='session-login'>
                <Link className='slogout' to='/login/'>Log in</Link>
                <br/>
                <Link className='sSignup' to='/signup/'>Sign up</Link>
            </div>
        )

        const sessionLogout = () => (
            <div className='session-login'>
                <button className='slogout' onClick={logout}>Logout</button>
                <button className='slogout' ><i class="fas fa-user-circle"></i></button>
                <button className='slogout' ><i class="far fa-paper-plane"></i></button>
                <button className='slogout' ><i class="far fa-bell"></i></button>
                <button className='sessionUpload' ><i class="fas fa-arrow-up"></i> Upload</button>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
        const {currentUser, logout} = this.props;

        const sessionLogin = () => (
            <div className='nav-login'>
                <input type="text" placeholder='Search PXelation'/>
                <br/>
                <Link className='nav-Link' to='/login/'>Log in</Link>
                <br/>
                <Link className='nav-Link' to='/signup/'>Sign up</Link>
            </div>
        )

        const sessionLogout = () => (
            <div className='nav-login'>
                <input type="text" placeholder='Search PXelation'/>
                <button onClick={logout}><i class="fas fa-sign-out-alt"></i></button>
                <button><i class="fas fa-user-circle"></i></button>
                <button><i class="far fa-paper-plane"></i></button>
                <button><i class="far fa-bell"></i></button>
                <button><i class="fas fa-arrow-up"></i> Upload</button>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

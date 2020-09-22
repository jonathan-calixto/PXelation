import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
        const {currentUser, logout} = this.props;

        const sessionLogin = () => (
            <div>
                <Link to='/login/'>Log in</Link>
                <br/>
                <Link to='/signup/'>Sign up</Link>
            </div>
        )

        const sessionLogout = () => (
            <div>
                <button onClick={logout}>Logout</button>
                <button>Profile</button>
                <button>Messages</button>
                <button>Notifications</button>
                <button>Upload</button>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

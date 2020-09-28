import React from 'react';
import { Link } from 'react-router-dom';
import ProfileButtonContainer from '../buttons/profile_button_container';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur(e) {
        e.stopPropagation();
        this.setState({ show: false }, () => {
            document.removeEventListener('click', this.handleBlur);
        });
    }

    handleClick(e) {
        e.stopPropagation();
        this.setState({ show: !this.state.show }, () => {
            document.addEventListener('click', this.handleBlur);
        });
    }

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

                <button onClick={logout}><i className="fas fa-sign-out-alt"></i></button>
                {/* <ProfileButtonContainer /> */}

                <div className='button-dropdown'>
                    <button className='button-link button-user' onClick={this.handleClick} onBlur={this.handleBlur}><i className="fas fa-user-circle"></i></button>

                    {this.state.show ? (
                        <ul id="user-dropdown" className="user-dropdown">
                            <li>
                                <ul className="editions">
                                    <span className="dropdown-subtitle">{currentUser.username}</span>
                                    <li><button onClick={logout}><i className="fas fa-sign-out-alt"></i> Log Out</button></li>
                                </ul>
                            </li>
                        </ul>
                    ) : null}
                </div>

                <button className='button-link'><i className="far fa-paper-plane"></i></button>
                <button className='button-link'><i className="far fa-bell"></i></button>
                <Link to="/photos/upload" className='button-upload'><i className="fas fa-arrow-up"></i> Upload</Link>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick(e){
        e.stopPropagation();
        this.props.logout();
    }

    handleBlur(e) {
        e.stopPropagation();
        return e => this.setState({ show: false });
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ show: true });
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

                <button onClick={logout}><i className="fas fa-sign-out-alt temp-logout"></i></button>

                <div className='button-dropdown'>
                    <button className='button-link button-user' onClick={this.handleClick} onBlur={this.handleBlur}><i className="fas fa-user-circle"></i></button>

                    {this.state.show ? (
                        <ul className="user-dropdown" onClick={e => e.stopPropagation()}>
                            <li><span className="dropdown-subtitle">{currentUser.username}</span></li><br/>
                            <li><Link to={`/users/${currentUser.id}`}>Profile (work in progress)</Link></li><br/>
                            <li><button onClick={this.handleLogoutClick}><i className="fas fa-sign-out-alt"></i> Log Out (work in progress)</button></li>
                        </ul>
                    ) : null}
                </div>

                <button className='button-link rest'><i className="far fa-paper-plane"></i></button>
                <button className='button-link rest'><i className="far fa-bell"></i></button>
                
                <Link to="/photos/upload" className='button-upload'><i className="fas fa-arrow-up"></i> Upload</Link>
            </div>
        )

        return currentUser ? sessionLogout() : sessionLogin();
    }
}

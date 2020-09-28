import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';

export default class ProfileButtonContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur(e) {
        this.setState({ show: false });
    }

    handleClick() {
        this.setState({ show: !this.state.show });
    }

    render(){
        const { currentUser, logout } = this.props;

        return(
            <div>
                <button className='button-link button-user' onClick={this.handleClick} onBlur={this.handleBlur}><i className="fas fa-user-circle"></i></button>

                {this.state.show ? (
                    <ul id="user-dropdown" className="user-dropdown">
                        <li>
                            <ul className="editions">
                                <span className="dropdown-subtitle">{currentUser.username}</span>
                                <li><button onClick={logout}><i className="fas fa-sign-out-alt"></i></button></li>
                            </ul>
                        </li>
                    </ul>
                ) : null }
            </div>
        );
    }
}
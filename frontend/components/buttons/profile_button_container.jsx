import React from 'react';

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
        const { logout } = this.props;

        return(
            <div>
                <button className='button-link button-user' onClick={this.handleClick} onBlur={this.handleBlur}><i className="fas fa-user-circle"></i></button>

                {this.state.show ? (
                    <ul id="user-dropdown" className="user-dropdown">
                        <li>
                            <ul className="editions">
                                <span className="dropdown-subtitle">Edition</span>
                                <li><button onClick={logout}><i className="fas fa-sign-out-alt"></i></button></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Ruby</a></li>
                            </ul>
                        </li>
                        <li>
                            <span className="dropdown-subtitle">Help</span>
                            <ul className="help">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </li>
                    </ul>
                ) : null }
            </div>
        );
    }
}
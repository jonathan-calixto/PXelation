import React from 'react';
import {Link} from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    demoUser(event){
        event.preventDefault();
        const demoUser = {
            username: 'nathan0922',
            password: '123456'
        };

        this.props.loginDemoUser(demoUser);
    }

    handleSubmit(event){
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

    
    renderErrors(){
        const { errors } = this.props;
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`}> <span className='form-errors'>{error}</span></li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === 'Sign up') {
            return (
                <div className='signup-form'>
                    <form className='form-class' onSubmit={this.handleSubmit}>
                        {/* <h3><span>Sign up to PXelation</span></h3> */}
                        <button onClick={this.demoUser}>Demo User</button>
                        <br/><br/>
                        <div className='p-spacer-div'><p>_______________________   or   _______________________</p></div>
                        <br/>
                        <span>{this.renderErrors()}</span>
                        <br/>
                            <label>
                                Username:
                                <br/>
                                <input 
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>
                            <br/><br/>
                            <label>
                                Email:
                                <br/>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <br/><br/>
                            <label>
                                Password:
                                <br/>
                                <input 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <br/><br/>
                            <button type="submit">{this.props.formType}</button>
                        <p className='login-bottom-link'><span>Already have an account? <Link to='/login/'>Log in!</Link></span></p>
                    </form>
                </div>
            );
        } else {
            return (
                <div className='signup-form'>
                    <form className='form-class' onSubmit={this.handleSubmit}>
                        <h3><span>Log in to PXelation</span></h3>
                        <br/>
                        <span>{this.renderErrors()}</span>
                        <br/>
                        <label>
                            Username:
                            <br/>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br/><br/>
                        <label>
                            Password:
                            <br/>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/><br/>
                        <button>{this.props.formType}</button>
                        <br/><br/>
                        <button onClick={this.demoUser}>Demo User</button>
                        <p className='login-bottom-link'><span>Not a user? <Link to='/signup/'>Sign up!</Link></span></p>
                    </form>
                </div>
            );
        }
    }
}
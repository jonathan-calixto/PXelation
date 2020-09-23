import React from 'react';


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

    demoUser(event){
        event.preventDefault();
        const demoUser = {
            username: 'nathan0922',
            password: '123456'
        };
        this.props.processForm(demoUser);
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
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === 'Sign up') {
            return (
                <div className='outer-div'>
                    <div className='session-form'>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                            <span>Sign up to PXelation</span>
                            <br/>
                            {this.renderErrors()}
                                <label>
                                    Username:
                                    <br/>
                                    <input 
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                    />
                                </label>
                                <br/>
                                <br/>
                                <label>
                                    Email:
                                    <br/>
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                    />
                                </label>
                                <br/>
                                <br/>
                                <label>
                                    Password:
                                    <br/>
                                    <input 
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </label>
                                <br/> 
                                <br/>
                                <button type="submit">{this.props.formType}</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='outer-div'>
                    <div className='session-form' >
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <span>Log in to PXelation</span>
                                <br/>
                                {this.renderErrors()}
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
                                <br/>
                                <br/>
                                <label>
                                    Password:
                                    <br/>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </label>
                                <br/>
                                <br/>
                                <button>{this.props.formType}</button>
                                <br/>
                                <br/>
                                <button onClick={this.demoUser}>Demo User</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
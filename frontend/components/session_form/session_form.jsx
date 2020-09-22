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
        if (this.props.formType === 'signup') {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Sign up to PXelation</h2>
                        {this.renderErrors()}
                        <div>
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
                            <input type="submit" value={this.props.formType}/>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <h2>Log in to PXelation</h2>
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
                            <input type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            );
        }
    }
}
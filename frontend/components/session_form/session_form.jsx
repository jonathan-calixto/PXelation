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
        return (
            <ul>
                {/* {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{error}</li>
                ))} */}
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
                                <input 
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>
                            <br/>
                            <label>
                                Email:
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <br/>
                            <label>
                                Password:
                                <input 
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
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
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>
                            <br/>
                            <label>
                                Password:
                                <input
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <br/>
                            <input type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            );
        }
    }
}
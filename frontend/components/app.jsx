import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';
import NavBar from './navbar/navbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div className='main-div'>
        <header className='navbar'>
            <header className='user-nav'>
                <NavBar />
                <LoginContainer />
            </header>
        </header>
        <div className='session' >
            <Switch>
                {/* <Route exact path="/" component={HomeFeedContainer} /> */}
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    </div>
);

export default App;
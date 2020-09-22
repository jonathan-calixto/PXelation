import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <header>
                <h1>PXelation</h1>
                <div>
                    <Link to=''>Discover</Link>
                    <Link to=''>Licensing</Link>
                    <Link to=''>Memberships</Link>
                    <Link to=''>Quests</Link>
                    <Link to=''>Creator Stories</Link>
                    <Link to=''>Blog</Link>
                </div>
                <div>
                    Search PXelation Box
                </div>
                <LoginContainer />
            </header>
            {/* <Route exact path="/" component={HomeFeedContainer} /> */}
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </header>
    </div>
);

export default App;
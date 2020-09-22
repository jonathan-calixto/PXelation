import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <header>
                <h1>PXelation</h1>
                <div>
                    <Link>Discover</Link>
                    <Link>Licensing</Link>
                    <Link>Memberships</Link>
                    <Link>Quests</Link>
                    <Link>Creator Stories</Link>
                    <Link>Blog</Link>
                </div>
                <div>
                    Search PXelation Box
                </div>
                <LoginContainer />
            </header>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
        </header>
    </div>
);

export default App;
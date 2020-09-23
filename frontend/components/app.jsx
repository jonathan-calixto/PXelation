import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div className='main-div'>
        <header>
            <header className='user-nav'>
                <h3>PXelation</h3>
                <div className='user-links'>
                    <Link className='nav-link' to=''>Discover <i className="fas fa-chevron-down"></i></Link>
                    <Link className='nav-link' to=''>Licensing <i className="fas fa-chevron-down"></i></Link>
                    <Link className='nav-link' to=''>Memberships</Link>
                    <Link className='nav-link' to=''>Quests</Link>
                    <Link className='nav-link' to=''>Creator Stories</Link>
                    <Link className='nav-link' to=''>Blog</Link>
                </div>
                <input type="text" placeholder='Search PXelation' className='search-bar'/>
                <LoginContainer />
            </header>
            {/* <Route exact path="/" component={HomeFeedContainer} /> */}
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;
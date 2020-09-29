import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';
import NavBar from './navbar/navbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPageContainer from './splash/splash_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import PhotoIndexContainer from './photos/photo_index_container';


const App = () => (
    <div className='app-div'>
            <header className='navbar'>
                <div className='navbar-div'>
                    <NavBar />
                    <LoginContainer />
                </div>
            </header>
        
            <Switch>
                <Route exact path="/" component={SplashPageContainer} />
                <ProtectedRoute exact path='/photos' component={PhotoIndexContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/photos/upload" component={PhotoUploadContainer} />
            </Switch>
    </div>
);

export default App;
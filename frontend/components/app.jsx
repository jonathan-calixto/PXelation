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
import PhotoShowContainer from './photos/photo_show_container';
import EditPhotoContainer from './photos/edit_photo_container';


const App = () => (
    <div className='app-div'>
            <header className='navbar'>
                <div className='navbar-div'>
                    <NavBar />
                    <LoginContainer />
                </div>
            </header>
        
            <Switch>
                <Route exact path="/" component={SplashPageContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path='/photos' component={PhotoIndexContainer}/>
                <ProtectedRoute exact path="/photos/upload" component={PhotoUploadContainer}/>
                <ProtectedRoute exact path="/photos/:photoId" component={PhotoShowContainer}/>
                <ProtectedRoute exact path='/photos/:photoId/edit' component={EditPhotoContainer}/>
            </Switch>
    </div>
);

export default App;
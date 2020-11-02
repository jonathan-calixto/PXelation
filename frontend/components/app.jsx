import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';
import NavBar from './navbar/navbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import EditPhotoContainer from './photos/edit_photo_container';
import UserProfileContainer from './user_profile/user_profile_container';


const App = () => (
    <div className='app-div'>
            <header className='navbar'>
                <div className='navbar-div'>
                    <NavBar />
                    <LoginContainer />
                </div>
            </header>
        
            <Switch>
                <Route exact path="/" component={SplashContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path='/photos' component={PhotoIndexContainer}/>
                <ProtectedRoute exact path="/photos/upload" component={PhotoUploadContainer}/>
                <ProtectedRoute exact path="/photos/:photoId" component={PhotoShowContainer}/>
                <ProtectedRoute exact path='/photos/:photoId/edit' component={EditPhotoContainer}/>
                <ProtectedRoute exact path='/users/:userId' component={UserProfileContainer}/>
            </Switch>
    </div>
);

export default App;
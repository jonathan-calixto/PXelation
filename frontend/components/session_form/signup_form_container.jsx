import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign up',
    navLInk: <Link to='/login'>Please Log in</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemoUser: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);


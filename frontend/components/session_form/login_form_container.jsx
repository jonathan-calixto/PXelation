import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to='/signup'>Sign up</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
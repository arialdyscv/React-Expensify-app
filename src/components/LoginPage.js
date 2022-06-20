import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startLogin }) => (
    <div>
        <h1>Login Page</h1>
        <h3>Please Login</h3>
        <button onClick={startLogin}>Log in with Google</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);
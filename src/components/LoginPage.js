import React, { Fragment } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="login-bg"></div>
    <div className="login-bg_bg2"></div>
    <div className="login-bg_bg3"></div>
    <div className="login-content">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <h3>Time to record your expenses</h3>
        <button className="button button--login" onClick={startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});
export default connect(undefined, mapDispatchToProps)(LoginPage);

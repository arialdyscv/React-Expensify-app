import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


//gets exported by calling the file with braquets "{}"
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest //variable that represents the rest of props not destructure
}) => (
  <Route
    {...rest}
    component={(props) => (
        isAuthenticated ? ( <Redirect to="/dashboard" />
        ) : ( 
            <Component {...props} />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
    //if state.auth.uid does NOT exist we are authenticated it will be true if not we are not it will be false
});


//gets exported by calling the file without braquets "{}"
export default connect(mapStateToProps)(PublicRoute);


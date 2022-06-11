// Higher Order Component (HOC) - A component that renders another component
// This is to re-use code
// Render hijacking
// Prop manipulation
// Abstract state


import React from "react";
import reactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please dont share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? ( 
                <WrappedComponent {...props} /> ) : (
                <p>Please log in to access your expenses book</p> )
            }
            
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);


reactDOM.render(<AuthInfo isAuthenticated={false} info='culito in the morning'/>, document.getElementById('app'));
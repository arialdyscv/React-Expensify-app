import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";//dependency to get <Provider />
import AppRouter, { history } from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { statSetExpenses } from "./actions/expenses";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css"; //dependency makes all browsers to start from the same place
import "./styles/styles.scss"; //loading the css file to render
import "react-dates/initialize"; //to initialize the dates
import "react-dates/lib/css/_datepicker.css";//in order for the dates css to work
import "./firebase/firebase";//https://console.firebase.google.com/project/expensify-app-76788/overview

const store = configureStore();

//Components nested in <Provider /> can have access to the store prop
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));//to render the page
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

const Auth = getAuth();

onAuthStateChanged(Auth, (user) => {
  if(user) {
    //User is signed in
    console.log( user.uid, 'user is logged in')
    store.dispatch(login(user.uid));
    store.dispatch(statSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    //user is signed out
    console.log('user is logged out')
    store.dispatch(logout());
    renderApp();
    history.push('/');//when the user logout will be redirected to rootpage
  }
});
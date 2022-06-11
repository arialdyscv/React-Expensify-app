import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/visibleExpenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

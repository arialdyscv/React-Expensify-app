import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import authReducer from "../reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store Creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

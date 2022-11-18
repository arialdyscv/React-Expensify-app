import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom"; /*allows to create multiple pages using route. 
dom is for websites and native is for phone-apps*/
import { createBrowserHistory } from "history";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/DashboardPage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "../router/PrivateRoute";
import PublicRoute from "../router/PublicRoute";

export const history = createBrowserHistory();
/*<BrowserRouter/> already comes with it 
but having it separated can be manipulated*/

const AppRouter = () => (
  //Switch looks into each url from top to bottom until finds a match. Route without path will always match
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
// Route takes in 2 props the path and a component. So it means that if it matches this path render this component
// Browser Router expects a single element inside so we use a div to have multiple routes
// exact=true means that  it will only show this component if it exactly matches this path. because this component can show up on other pages since it has the same starting path.
//Switch do: it will go through all the routes and stop on the path that matches. If no path matches it will continue to the bottom the 404pages doesn't have a path but it means it always matches with any path.
//path="/edit/:id" whatever comes after edit it will go.
export default AppRouter;

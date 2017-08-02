// Inclue the React library
var React = require("react");
var ReactDOM = require("react-dom");
// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("./components/Main");
var Form = require("./components/children/Form");
var JobForms = require("./components/children/JobForms");
var Table = require("./components/children/Table");
var Login = require("./components/children/Login");
// var Signup = require("./components/children/Signup");


// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Login}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Clients" component={Form} />
      <Route path="Jobs" component={JobForms} />
      <Route path="Table" component={Table} />
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Login} />

    </Route>
  </Router>, document.getElementById('app'));

	

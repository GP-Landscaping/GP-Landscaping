// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Route,
  Link} from "react-router-dom"

 import Form from "./components/children/Form"
 import JobForms from "./components/children/JobForms"


// Include the main Main Component
var Main = require("./components/Main");

const app = document.getElementById('app');



// This code here allows us to render our main component (in this case Main)
ReactDOM.render((<Router>
	<div>
	<Route exact path= "/" component={Main}/>
	 <Route exact path="/clients" component={Form}/>
	 </div>
	
	</Router>), document.getElementById('app'));
	

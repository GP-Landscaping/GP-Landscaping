import React from "react";
import Form from "./children/Form";
import JobForms from "./children/JobForms";
import Table from "./children/Table";
import Confirm from "./children/Confirm";

import Login from "./children/Login";
import Signup from "./children/Signup";
import LandingPage from "./children/LandingPage";

// import Clients from "./children/Clients"

import { Route, Link} from "react-router";
var Header = require('./children/header.js');


// import styles from "../public/assets/styles/forms.css"
var helpers = require("./utils/helpers");
// var myHeader = require("./children/myHeader.jsx");


var Main = React.createClass({

handleSubmit: function(e) {

console.log("submit");
},

 
      render: function() {
    return (

      


      <div className="container">
         <div className="row">
          <Header/>



         
         {this.props.children}





</div>
</div>
          
        
    );
  }
});


module.exports = Main;

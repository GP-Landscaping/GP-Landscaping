// Include React
import React from "react";
import Form from "./children/Form";
import JobForms from "./children/JobForms";
import Table from "./children/Table";
import Login from "./children/Login";
// import Signup from "./children/Signup";
import { Route, Link} from "react-router";
var Header = require('./parts/header.js');



var helpers = require("./utils/helpers");
var myHeader = require("./children/myHeader.jsx");


var Main = React.createClass({


 
      render: function() {
    return (
      <div>
        <div>
          <Header title="Lanscape"/>
          <div className="container">
             <div className="row">
              <div className="jumbotron">
                <h2 className="text-center">Welcome to GP-Landscaping</h2>
                <p className="text-center">
                  <em>Please fill out the form below to add a new Client/Job!!!!!!!</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>



          <div className="col-md-6">

           {this.props.children}
           
            <Link to ="clients"><button className= "btn btn-success">New Client</button></Link>
          </div>




          
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;




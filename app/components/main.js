// Include React
var React = require("react");

var Form = require("./children/Form");
var JobForms = require("./children/JobForms");
var Link = require("react-router").Link;


var helpers = require("./utils/helpers");


var Main = React.createClass({


 
      render: function() {
    return (
      <div className="container">
         <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Welcome to GP-Landscaping</h2>
            <p className="text-center">
              <em>Please fill out the form below to add a new Client/Job!!!!!!!</em>
            </p>
          </div>

         
         


          <div className="col-md-6">

           {this.props.children}
           
            <Link to ="clients"><button className= "btn btn-success">New Client</button></Link>
          </div>




          
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

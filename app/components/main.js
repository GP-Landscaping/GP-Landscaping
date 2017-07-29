// Include React
var React = require("react");

var Form = require("./children/Form");
var JobForms = require("./children/JobForms")


var helpers = require("./utils/helpers");
var myHeader = require("./children/myHeader.jsx");


var Main = React.createClass({



  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
//   getInitialState: function() {
//     return { name: ""};
//   },


// // constructor(props) {
   
// //     this.state = {name: ''};

// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }

//  handleChange(event) {
//     this.setState({name: event.target.value});
//   },



    

  
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

         <myHeader/>

<div className="col-md-6">

            <JobForms/>

          </div>
          
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;




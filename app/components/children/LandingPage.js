import React from "react";

// import LandingPage from "./children/LandingPage";

var Link = require("react-router").Link;
var LandingPage = React.createClass({

handleSubmit: function(e) {

console.log("submit");
},

 
      render: function() {
    return (

      


      

         
      


          <div className="col-md-6">

          
           
            <Link to ="Clients" className="btn btn-success">New Client</Link>
          </div>




          
        
    );
  }
});


module.exports = LandingPage;

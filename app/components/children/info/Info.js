import React from "react";
import axios from "axios";
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;
var Alert = require('react-bootstrap').Alert;
var Link = require("react-router").Link;


var Info = React.createClass({

handleSubmit: function(e) {

// this.context.router.push("/jobs");
console.log("asdad")

            // console.log("submit");           
            axios.post("/api/clients", {
                clientName: localStorage.getItem("clientName"),
                clientEmail: localStorage.getItem("clientEmail"),
                clientAddress: localStorage.getItem("clientAddress"),
                clientCity: localStorage.getItem("clientCity"),
                clientZip: localStorage.getItem("clientZip"),
                
                




            }).then(function(response) {    
             
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },

render: function() {
	var clientName=localStorage.getItem("clientName");
	var clientEmail=localStorage.getItem("clientEmail");
	var clientAddress=localStorage.getItem("clientAddress");
	var clientCity=localStorage.getItem("clientCity");
	var clientZip=localStorage.getItem("clientZip");
  var clientState=localStorage.getItem("clientState");

	
          
           return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-address-book" aria-hidden="true"></i> Verify Client Info:
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
              <h2><strong>Client: </strong> {clientName}</h2>
              <hr></hr>
              <h2><strong>Email: </strong> {clientEmail}</h2>
              <hr></hr>
              <h2><strong>Address: </strong> {clientAddress}</h2>
              <hr></hr>
              <h2><strong>City: </strong> {clientCity}</h2>
              <hr></hr>
              <h2><strong>Zip: </strong> {clientZip}</h2>
              <hr></hr>
              <h2><strong>State: </strong> {clientState}</h2>
              <hr></hr>

                {/* Note how we associate the text-box inputs with the state values */}
                
               
                  <div className="pull-right">
                   <Link onClick= {this.handleSubmit} to ="Jobs"><button className= "btn btn-success">Continue</button></Link>                   
                  </div>
                
                
                <div className="pull-left">
                  <Link to ="Clients"><button className= "btn btn-success">Go Back</button></Link>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
           

         
    
                 
          
        

   

module.exports = Info;
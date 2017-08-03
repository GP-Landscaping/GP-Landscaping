import React from "react";
import axios from "axios";
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;
var Alert = require('react-bootstrap').Alert;
var Link = require("react-router").Link;


var Confirm = React.createClass({
  contextTypes: {
         router: React.PropTypes.func
     },

handleSubmit: function(e) {

// this.context.router.push("/jobs");
console.log("asdad")

            // console.log("submit");           
            axios.post("/api/jobs", {
              jobDate: localStorage.getItem("jobDate"),
              jobEnd: localStorage.getItem("jobEnd"),
              jobType: localStorage.getItem("jobType"),
              jobNotes: localStorage.getItem("jobNotes"),              
                jobEmployee: localStorage.getItem("jobEmployee"),
                jobLabor: localStorage.getItem("jobLabor"),
                jobCommute: localStorage.getItem("jobCommute"),
                jobMaterials: localStorage.getItem("jobMaterials"),
                jobCost: localStorage.getItem("jobCost"),
                
                




            }).then(function(response) {    
             
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },

render: function() {
  var jobDate=localStorage.getItem("jobDate");
  var jobEnd=localStorage.getItem("jobEnd");
  var jobType=localStorage.getItem("jobType");
  var jobNotes=localStorage.getItem("jobNotes");


	var jobEmployee=localStorage.getItem("jobEmployee");
	var jobLabor=localStorage.getItem("jobLabor");
	var jobCommute=localStorage.getItem("jobCommute");
	var jobMaterials=localStorage.getItem("jobMaterials");
	var jobCost=localStorage.getItem("jobCost");
  
	
          
           return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-address-book" aria-hidden="true"></i> Verify Job Info:
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
              <h2><strong>Client: </strong> {jobDate}</h2>
              <hr></hr>
              <h2><strong>Email: </strong> {jobEnd}</h2>
              <hr></hr>
              <h2><strong>Address: </strong> {jobType}</h2>
              <hr></hr>
              <h2><strong>City: </strong> {jobNotes}</h2>
              <hr></hr>
              <h2><strong>Zip: </strong> {jobEmployee}</h2>
              <hr></hr>
              <h2><strong>State: </strong> {jobLabor}</h2>
              <hr></hr>

                {/* Note how we associate the text-box inputs with the state values */}
                
               
                  <div className="pull-right">
                   <Link onClick= {this.handleSubmit} to ="Table"><button className= "btn btn-success">Continue</button></Link>                   
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
           

         
    
                 
          
        

   

module.exports = Confirm;
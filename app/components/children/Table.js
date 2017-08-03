var React = require("react");
var axios = require("axios");
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;

var Link = require("react-router").Link;


// Form is the main component. It includes the banner and form element
var Table = React.createClass({

  // getInitialState: function() {
  // return {
  //   // axios.get("/api/jobs", {
  //   //           jobDate: localStorage.getItem("jobDate"),
  //   //           jobEnd: localStorage.getItem("jobEnd"),
  //   //           jobType: localStorage.getItem("jobType"),
  //   //           jobNotes: localStorage.getItem("jobNotes"),              
  //   //             jobEmployee: localStorage.getItem("jobEmployee"),
  //   //             jobLabor: localStorage.getItem("jobLabor"),
  //   //             jobCommute: localStorage.getItem("jobCommute"),
  //   //             jobMaterials: localStorage.getItem("jobMaterials"),
  //   //             jobCost: localStorage.getItem("jobCost"),
    

  // },

	// handleSubmit: function(e) {console.log("table")
	// .then(function(response) {            
 //                console.log(response);
 //            }).catch(function (error) {
 //                console.log(error);
 //            });
 //        },

	render: function() {
        
          console.log("check")
            return(

                <div classNameName="container">
         <div classNameName="row">
          
                <div className="panel panel-primary" className="panel">
       
            <div className="panel-heading" className="panel-title">
              <h3 className="panel-title"><strong>Open Jobs</strong></h3>
            </div>
            <div className="panel-body">
            <table className="table table-hover" id="schedule-table">
            <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Start Date</th>
                    <th>Job Type</th>
                    <th>Bid Amt($)</th>
                    
                    
                 </tr>
                </thead>
                <tbody>
                </tbody>
              </table>


            </div>
          </div>

          <div className="panel panel-primary" className="panel">
       
            <div className="panel-heading" className="panel-title">
              <h3 className="panel-title"><strong>Closed Jobs</strong></h3>
            </div>
            <div className="panel-body">
            <table className="table table-hover" id="schedule-table">
            <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Closed Date</th>
                    <th>Job Type</th>
                    <th>Bid Amt($)</th>
                    <th>Invoice Amt Rec. ($)</th>
                    <th></th>
                 </tr>
                </thead>
                <tbody>
                </tbody>
              </table>


            </div>
          </div>

                 </div>
                 </div>

            );
        }

      });


module.exports = Table;
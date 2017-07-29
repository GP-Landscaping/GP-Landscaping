var React = require("react");
var axios = require("axios");
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;

var Link = require("react-router").Link;


// Form is the main component. It includes the banner and form element
var Table = React.createClass({

	handleSubmit: function(e) {console.log("table")
	.then(function(response) {            
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },

	render: function() {
        
          console.log("check")
            return(

                <div classNameName="container">
         <div classNameName="row">
          
                <div className="panel panel-primary" className="panel">
       
            <div className="panel-heading" className="panel-title">
              <h3 className="panel-title"><strong>Airplane Schedule</strong></h3>
            </div>
            <div className="panel-body">
            <table className="table table-hover" id="schedule-table">
            <thead>
                  <tr>
                    <th>Plane Name</th>
                    <th>Destination</th>
                    <th>Frequency</th>
                    <th>Next Arrvial</th>
                    <th>Minutes Away</th>
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
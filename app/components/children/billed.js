var React = require("react");
var axios = require("axios");
var Link = require("react-router").Link;

var Form = React.createClass({

getInitialState: function() {
  return {
    employee_number: '',
    labor_hours: '',
    commute_time: '',
    materials_needed:'',
    materials_cost: '',
  }
},

handleSubmit: function(f) {
            
            console.log("submit");           
            axios.post("/api/billed", {
                billNum: this.employee_number.value,
                bllHours: this.labor_hours.value,
                billCommute: this.commute_time.value,
                billMatNeed: this.materials_needed.value,
                billMatCost: this.materials_cost.value,
            }).then(function(response) {            
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },

        render: function() {
          console.log("check")
            return(

                <div className="container">
         <div className="row">
          
                <div>
                        {this.props.children}

                              <div className="col-xs-12 col-sm-4 register">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="empNumber">Number</label>
                                    <input type="text" name="empNumber" placeholder="Employee Number" ref={(input) => { this.empNumber = input; }}/>
                                    <label htmlFor="hours">Email</label>
                                    <input type="text" name="hours" placeholder="Hours Worked" ref={(input) => { this.hours = input; }}/>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" placeholder="Address" ref={(input) => { this.address= input; }}/>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" placeholder="City" ref={(input) => { this.city= input; }}/>
                                    <label htmlFor="city">Zip</label>
                                    <input type="text" name="zip" placeholder="Zip Code" ref={(input) => { this.zip= input; }}/>
                                     
                                </form>
                            </div>
                        </div>
                 </div>
                 </div>
            );
        }

      });

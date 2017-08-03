var React = require("react");
var axios = require("axios");
var Link = require("react-router").Link;

var Billed = React.createClass({
    contextTypes: {
         router: React.PropTypes.func
     },

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
     localStorage.setItem("jobEmployee", this.employee_number.value);
            localStorage.setItem("jobLabor", this.labor_hours.value);
            localStorage.setItem("jobCommute", this.commute_time.value);
            localStorage.setItem("jobMaterials", this.materials_needed.value);
             localStorage.setItem("jobCost", this.materials_cost.value);
            
            this.context.router.push("/Confirm");
            // console.log("submit");           
            // axios.post("/api/billed", {
            //     billNum: this.employee_number.value,
            //     bllHours: this.labor_hours.value,
            //     billCommute: this.commute_time.value,
            //     billMatNeed: this.materials_needed.value,
            //     billMatCost: this.materials_cost.value,
            // }).then(function(response) {            
            //     console.log(response);
            // }).catch(function (error) {
            //     console.log(error);
            // });
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
                                    <label htmlFor="empNumber">Workers needed: </label>
                                    <input type="text" name="empNumber" placeholder="# of Emps." ref={(input) => { this.employee_number = input; }}/>
                                    <label htmlFor="hours">Est. Labor (Hours): </label>
                                    <input type="text" name="labor" placeholder="Est. Hours" ref={(input) => { this.labor_hours = input; }}/>
                                    <label htmlFor="commute">Est. Commute Time (min.): </label>
                                    <input type="text" name="address" placeholder="Commute" ref={(input) => { this.commute_time= input; }}/>
                                    <label htmlFor="materials">Materials Needed: </label>
                                    <textArea type="text" name="city" placeholder="Materials" ref={(input) => { this.materials_needed= input; }}/>
                                    <label htmlFor="materialsCost">Est. Materials Cost ($): </label>
                                    <input type="text" name="zip" placeholder="" ref={(input) => { this.materials_cost= input; }}/>

                                    <button className= "btn btn-success">Continue</button>

                                     
                                </form>
                            </div>
                        </div>
                 </div>
                 </div>
            );
        }

      });

module.exports = Billed;
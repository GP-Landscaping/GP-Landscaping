var React = require("react");
var axios = require("axios");


var Link = require("react-router").Link;
// Form is the main component. It includes the banner and form element
var JobForms = React.createClass({
   contextTypes: {
         router: React.PropTypes.func
       },

getInitialState: function() {
  return {
      date: '',
      jobEnd: '',
      type: '',

      
      notes: ''


  }
},


 handleSubmit: function(e) {
   localStorage.setItem("jobDate", this.date.value);
            localStorage.setItem("jobEnd", this.jobEnd.value);
            localStorage.setItem("jobType", this.type.value);
            localStorage.setItem("jobNotes", this.notes.value);
           

            this.context.router.push("/billed");
                      
            // axios.post("/api/jobs", {
                


            //     // userEmail: this.email.value,
            //     // userPassword: this.password1.value
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

                            <div>
                    

                              <div className="col-xs-12 col-sm-4 register">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="Type">Start Date: </label>
                                    <input type="text" name="date" placeholder="XX/XX/XXXX" ref={(input) => { this.date = input; }}/>
                                    <label htmlFor="Type">End Date: </label>
                                    <input type="text" name="date" placeholder="XX/XX/XXXX" ref={(input) => { this.jobEnd = input; }}/>
                                    <label htmlFor="Type">Job Type: </label>
                                    <input type="text" name="type" placeholder="type" ref={(input) => { this.type = input; }}/>
                                    <label htmlFor="Notes">Notes:</label>
                                    <textArea type="text" name="Notes" placeholder="Job Notes" ref={(input) => { this.notes= input; }}/>
                                    
                                    <button className= "btn btn-success">Create Bid!</button>
                                </form>
                            </div>
                       </div>
                  </div>
               </div>
          </div>
                 
            );
        }

      });
 
 // 

//    handleChange: function(event) {

//     this.setState({ name: event.target.value});

//   },

//   handleSubmit: function(event) {
//     // preventing the form from trying to submit itself
//     event.preventDefault();
//     // Set the parent to have the search term
//     this.props.setTerm(this.state.name);

//     // Clearing the input field after submitting
//     this.setState({ name: "" });
//   },


// setTerm: function () {
//         var name = document.getElementById('name');
//         document.getElementById('post').onclick = function () {
//           var data = document.getElementById('data').value;
//           console.log(data);
//           axios.post('/api', JSON.parse(data))
//             .then(function (res) {
//               name.className = 'name';
//               name.innerHTML = res.data;
//             })
//             .catch(function (err) {
//               name.className = 'container text-danger';
//               name.innerHTML = err.message;
//             });
//         };
//       },
//   // setName: function(name) {
//   //   this.setState({ name: name });
//   // },

//   render: function() {
//     return (
//       <div className="panel panel-default">
//         <div className="panel-heading">
//           <h3 className="panel-title text-center">Form</h3>
//         </div>
//         <div className="panel-body text-center">

//           <form onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <h4 className="">
//                 <strong>name</strong>
//               </h4>

//               {
//                 Note how each of the form elements has an id that matches the state.
//                 This is not necessary but it is convenient.
//                 Also note how each has an onChange event associated with our handleChange function.
//               }
//               <input
//                 type="text"
//                 value={this.state.name}
//                 className="name"
//                 id="name"
//                 onSubmit={this.postClient(value)}
//                 required
//               />
//               <br />
//               <button
//                 className="btn btn-primary"
//                 type="submit"

//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// });

// Export the component back for use in other files
module.exports = JobForms;
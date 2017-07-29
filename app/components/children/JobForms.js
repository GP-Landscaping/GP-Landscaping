var React = require("react");
var axios = require("axios");


var Link = require("react-router").Link;
// Form is the main component. It includes the banner and form element
var JobForms = React.createClass({

getInitialState: function() {
  return {
      date: '',
      type: '',
      materials: '',
      bid: '',
      jobOpen: '',
      notes: ''


  }
},


 handleSubmit: function(e) {
            // e.preventDefault();
            console.log("submit");           
            axios.post("/api/jobs", {
                jobDate: this.date.value,
                jobType: this.type.value,
                jobMaterials: this.materials.value,
                jobBid: this.bid.value,
                jobOpen: this.jobOpen.value,
                jobNotes: this.notes.value,


                // userEmail: this.email.value,
                // userPassword: this.password1.value
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
          <div className="panel">
            <h2 className="text-center"> HEllo</h2>
            
          </div>
                <div>

                <div>
                    

                              <div className="col-xs-12 col-sm-4 register">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="date">Date</label>
                                    <input type="text" name="date" placeholder="Date" ref={(input) => { this.date = input; }}/>
                                    <label htmlFor="Type">Type</label>
                                    <input type="text" name="type" placeholder="type" ref={(input) => { this.type = input; }}/>
                                    <label htmlFor="materials">Materials</label>
                                    <input type="text" name="address" placeholder="Address" ref={(input) => { this.materials= input; }}/>
                                    <label htmlFor="city">Bid Amount:</label>
                                    <input type="text" name="bid" placeholder="$bid" ref={(input) => { this.bid= input; }}/>
                                    <label htmlFor="jobOpen">jobOpen:</label>
                                    <input type="text" name="bid" placeholder="jobOpen" ref={(input) => { this.jobOpen= input; }}/>
                                    <label htmlFor="jobOpeny">Notes:</label>
                                    <textArea type="text" name="Notes" placeholder="Job Notes" ref={(input) => { this.notes= input; }}/>
                                    
                                    <Link to ="Table"><button className= "btn btn-success">Continue</button></Link>
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
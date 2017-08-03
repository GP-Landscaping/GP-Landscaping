
var React = require("react");
var axios = require("axios");
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;

// import styles from "../../../public/assets/styles/forms.css"
var Link = require("react-router").Link;

// import style from "../../../public/assets/styles/";


// Form is the main component. It includes the banner and form element
var Form = React.createClass({
      contextTypes: {
         router: React.PropTypes.func
    },        

getInitialState: function() {
  return {
    name: '',
    email: '',
    address: '',
    city:'',
    zip: '',
    state: 'Alabama',
    

  }
}, 
onChange: function(e)
{
    this.setState({state: event.target.value})

},


 handleSubmit: function(e) {
            localStorage.setItem("clientName", this.name.value);
            localStorage.setItem("clientEmail", this.email.value);
            localStorage.setItem("clientAddress", this.address.value);
            localStorage.setItem("clientCity", this.city.value);
            localStorage.setItem("clientZip", this.zip.value);
            localStorage.setItem("clientState", this.state.value);
            this.context.router.push("/info");

            // console.log("submit");
            // this.context.router.push("/info");           
            // axios.post("/api/clients", {
            //     clientName: this.name.value,
            //     clientEmail: this.email.value,
            //     clientAddress: this.address.value,
            //     clientCity: this.city.value,
            //     clientZip: this.zip.value,
            //     clientState: this.state.value,




              
            // }).then(function(response) {    
             
            //     console.log(response);
            // }).catch(function (error) {
            //     console.log(error);
            // });
        },

       

        render: function() {
          console.log("check");
         
            return(

                
          
                

                              <div className="col-xs-12 col-sm-4 register">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                   <div class="form-group">
                                    <label htmlFor="firstName">Name</label>
                                    <input type="text" name="name" placeholder="Full Name" ref={(input) => { this.name = input; }}/>
                                    </div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" placeholder="email" ref={(input) => { this.email = input; }}/>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" placeholder="Address" ref={(input) => { this.address= input; }}/>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" placeholder="City" ref={(input) => { this.city= input; }}/>
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" name="zip" placeholder="Zip Code" ref={(input) => { this.zip= input; }}/>
                                    <label htmlFor="state">State</label>
                                    
                                    
                                     
                  
                                   <button className= "btn btn-success" >Verify Info</button>
                                </form>
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
module.exports = Form;

var React = require("react");
var axios = require("axios");

var Signup = React.createClass({

render: function() {
          console.log("check")
            return(
            <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                <div class="navbar-header">
                </div>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <h1>GP-Landscaping</h1>
                    <h2>Sign-Up Form</h2>
                    <form class="signup">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email-input" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password-input" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or log in <a href="/login">here</a></p>
                </div>
                </div>
            </div>
         </div>
  
           );
        }

      });

module.exports = Signup;
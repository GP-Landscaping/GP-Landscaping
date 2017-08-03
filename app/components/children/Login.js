var React = require("react");
var axios = require("axios");
var Link = require("react-router").Link;

var Login = React.createClass({




render: function() {
          console.log("check")
            return(
                <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h1>G.P. Landscaping</h1>
                        <h2>Login Form</h2>
                        <form className="login">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
                        </div>
                        
                       <Link to ="Main"> <button type="submit" className="btn btn-default">Login</button></Link>
                        </form>
                        <br />
                        <p><strong>New User? Please Sign Up</strong></p> <Link to ="Signup"><button className= "btn btn-success">Sign Up</button></Link>
                  </div>
                    </div>
                    </div>
                </div>
            
           );
        }

      });
 

module.exports = Login;
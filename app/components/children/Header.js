var React = require("react");
var Link = require("react-router").Link;

var Header = React.createClass({
	render: function(){
	return (

<div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">GP-Landscaping</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/Table">View Jobs</Link></li>
                  <li><Link to="/About">About</Link></li>
                </ul>
              </div>
            </div>
          </nav>

         </div>
         </div>
        );
    }
        });

        module.exports = Header;
        


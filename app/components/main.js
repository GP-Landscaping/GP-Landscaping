// Include React
var React = require("react");

var Form = require("./children/Form");


var helpers = require("./utils/helpers");


var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { name: ""};
  },


componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.name !== this.state.name) {
      console.log("UPDATED");

            }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    
    setName: function(name) {
    this.setState({ name: name });
  },

      render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setName={this.setName} />

          </div>

          
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

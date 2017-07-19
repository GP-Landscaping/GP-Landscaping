
var React = require("react");

// Form is the main component. It includes the banner and form element
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { name: "" };
    // return { date: "" };
    // return { address: ""};
    // // return { jobOpen: "" };
    // return { notes: ""}
  },

   handleChange: function(event) {

    this.setState({ name: event.target.value });

  },

  handleSubmit: function(event) {
    // preventing the form from trying to submit itself
    event.preventDefault();
    // Set the parent to have the search term
    this.props.setName(this.state.name);

    // Clearing the input field after submitting
    this.setState({ name: "" });
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Form</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>name</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange function.
              */}
              <input
                type="text"
                value={this.state.name}
                className="form-control text-center"
                id="name"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
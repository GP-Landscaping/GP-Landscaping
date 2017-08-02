var React = require('react');
var Link = require('react-router');
import {Navbar, NavItem} from 'react-materialize';


var Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<header>
				<h1>{this.props.title}</h1>
				<Navbar>
					<NavItem><Link to="../children/Form.js" activeClassName="active">Forms</Link></NavItem>
					<NavItem><Link to="../children/invoice.js" activeClassName="active">Invoices</Link></NavItem>
					<NavItem><Link to="../children/JobForms.js" activeClassName="active">Jobs</Link></NavItem>
				</Navbar>
			</header>
			);
	}
});

module.exports = Header;
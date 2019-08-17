import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Consumer } from './ContextState';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			test: true
		};
	}

	render() {
		const { test } = this.state;
		const {
			data: { name }
		} = this.props;
		return (
			<div>
				Hello, Iam a nested statefull Component {test}
				<div>{`Data from Redux - ${name}`}</div>
				<div>Data from Context </div>
				<Consumer>{({ data: { from } }) => <div>{from}</div>}</Consumer>
			</div>
		);
	}
}

const mapStatetoProps = state => {
	return {
		data: state.test.data
	};
};

Header.propTypes = {
	data: PropTypes.object
};

export default connect(mapStatetoProps)(Header);

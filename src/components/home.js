import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			test: true
		};
	}

	redirectUrl = () => {
		const { history } = this.props;
		history.push('/');
	};

	render() {
		const { test } = this.state;
		const {
			data: { name }
		} = this.props;
		return (
			<div>
				<button type="button" onClick={this.redirectUrl} className="btn btn-primary">
					Hello
				</button>
				Hello from state
				{test}
				{name}
			</div>
		);
	}
}

const mapStatetoProps = state => {
	return {
		data: state.test.data
	};
};
Home.propTypes = {
	history: PropTypes.func.isRequired,
	data: PropTypes.object
};

export default connect(mapStatetoProps)(Home);

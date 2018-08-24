import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
		return (
			<div>
				<button type="button" onClick={this.redirectUrl} className="btn btn-primary">
					Hello
				</button>
				Hello from state
				{test}
			</div>
		);
	}
}

Home.propTypes = {
	history: PropTypes.func.isRequired
};

export default Home;

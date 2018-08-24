import React, { Component } from 'react';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			test: true
		};
	}

	render() {
		const { test } = this.state;
		return <div>Hello From Header {test}</div>;
	}
}

export default Header;

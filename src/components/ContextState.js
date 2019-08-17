import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

export const { Consumer } = AppContext;

class ContextState extends Component {
	state = {
		data: {
			from: "I'm from context"
		},
		updateData: this.updateData
	};

	updateData = () => {
		this.setState({
			data: {
				from: 'updated context'
			}
		});
	};

	render() {
		const { data, updateData } = this.state;
		console.log(data, updateData);
		const { children } = this.props;

		return <AppContext.Provider value={this.state}>{children}</AppContext.Provider>;
	}
}

ContextState.propTypes = {
	children: PropTypes.element.isRequired
};

export default ContextState;

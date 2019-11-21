import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class Dropdown extends Component {
	render() {
		const { options, handleChange, selectedOption } = this.props;
		return (
			<div>
				<Select options={options} onChange={handleChange} value={selectedOption} />
			</div>
		);
	}
}

Dropdown.propTypes = {
	options: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	selectedOption: PropTypes.object.isRequired
};

export default Dropdown;

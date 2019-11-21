import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, changeValue }) => (
	<div>
		<input type={type} name={name} onChange={changeValue} value={value} />
	</div>
);

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	changeValue: PropTypes.func.isRequired
};

export default Input;

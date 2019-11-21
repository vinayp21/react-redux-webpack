// import { push } from 'connected-react-router';

import testAction from '../constants/testConstants';

export const firstAction = () => dispatch => {
	setTimeout(() => {
		dispatch({
			type: testAction.TEST_CONSTANT,
			payload: 'my data'
		});
	}, 5000);

	return {
		type: 'ANOTHER_TEST',
		payload: 'my data'
	};
};

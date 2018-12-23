import { push } from 'connected-react-router';

import testAction from '../constants/testConstants';

export const firstAction = () => dispatch => {
	setTimeout(() => {
		dispatch(push('/'));
	}, 5000);
	dispatch({
		type: testAction.TEST_CONSTANT,
		payload: 'my data'
	});
};

import testAction from '../constants/testConstants';

export const firstAction = () => dispatch => {
	setTimeout(() => {
		dispatch({
			type: testAction.TEST_CONSTANT,
			payload: 'my data'
		});
	}, 5000);
};

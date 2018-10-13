import testAction from '../constants/testConstants';

const initialState = {
	data: {
		name: 'vinay'
	}
};

export default function(previousState = initialState, action) {
	switch (action.type) {
		case testAction.TEST_CONSTANT:
			return {
				...previousState,
				data: {
					name: 'Vinay Prakash'
				}
			};
		default:
			return {
				...previousState
			};
	}
}

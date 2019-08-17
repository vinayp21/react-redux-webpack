import testAction from '../constants/testConstants';

const initialState = {
	data: {
		name: 'vinay'
	}
};

export default function test(previousState = initialState, action) {
	switch (action.type) {
		case testAction.TEST_CONSTANT:
			return {
				...previousState,
				data: {
					name: 'Vinay Prakash'
				}
			};
		case 'ANOTHER_TEST':
			return {
				...previousState,
				data: {
					name: 'Hello World'
				}
			};
		default:
			return {
				...previousState
			};
	}
}

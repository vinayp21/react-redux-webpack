const initialState = {
	data: {
		name: 'vin'
	}
};
export default function dup(previousState = initialState, action) {
	switch (action.type) {
		case 'ANOTHER_TEST':
			return {
				...previousState,
				data: {
					name: 'Hello world'
				}
			};
		default:
			return {
				...previousState
			};
	}
}

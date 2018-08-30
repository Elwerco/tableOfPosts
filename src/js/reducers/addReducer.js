const initialState = {
	test: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_DATA':
			return {
				...state,
				test: action.payload
			};
			  break;
		default: 
			return state;
		}
	};
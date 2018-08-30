const initialState = {
	status: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_START':
			return {
				...state,
				status: action.payload
			};
			  break;
			case 'LOAD_STOP':
			return {
				...state,
				status: action.payload
			};
			  break;
		default: 
			return state;
		}
	};
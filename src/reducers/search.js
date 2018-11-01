export default function reducer(state = { query: null }, action) {
	switch (action.type) {
		case 'FETCH_DATA': 
			return {
				...state,
				query: action.payload,
			};
		case 'RESET_QUERY':
			return {
				...state,
				filter: null,
				query: null,
			};
		default: 
			return state;
	}
}
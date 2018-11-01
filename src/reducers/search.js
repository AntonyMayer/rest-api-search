export default function data(state = { query: null, received: null }, action) {
	switch (action.type) {
		case 'FETCH_DATA': 
			return {
				...state,
				query: action.payload.query,
				received: action.payload.results,
			};
		case 'RESET_QUERY':
			return {
				...state,
				query: null,
				received: null,
			};
		default: 
			return state;
	}
}
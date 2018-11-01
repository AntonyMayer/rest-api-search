export default function data(state = { query: null, results: null }, action) {
	switch (action.type) {
		case 'FETCH_DATA': 
			return {
				...state,
				query: action.payload.query,
				results: action.payload.results,
			};
		case 'RESET_QUERY':
			return {
				...state,
				query: null,
				results: null,
			};
		default: 
			return state;
	}
}
export default function reducer(state = { current_filter: null }, action) {
	switch (action.type) {
		case "FILTER":
			return state = {
				...state,
				current_filter: action.payload,
			};
		default: 
			return state;
	}
}
export default function reducer(state = 0, action) {
	switch (action.type) {
		case "FILTER":
			return state = {
				...state,
				filter: action.payload,
			};
		default: 
			return state;
	}
}
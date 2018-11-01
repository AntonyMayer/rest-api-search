export default function reducer(state = 0, action) {
	switch (action.type) {
		case "FETCH_DATA": 
			return state + 1;
		case "FILTER":
			return state - 1;
		case "RESET":
			return state = action.payload;
		default: 
			return state;
	}
}
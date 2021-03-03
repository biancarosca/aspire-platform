export const education = (state = [], action) => {
	switch (action.type) {
	case "ADD_EDUCATION":
		return [...state, action.payload];
	default:
		return state;
	}
};

export const activeSection = (state = false, action) => {
	switch (action.type) {
	case "TOGGLE_STATE":
		return action.payload;
	default:
		return state;
	}
};


export const education = (state = [], action) => {
	switch (action.type) {
	case "ADD_EDUCATION":
		return [...state, action.payload];
	default:
		return state;
	}
};

export const work = (state = [], action) => {
	switch (action.type) {
	case "ADD_WORK":
		return [...state, action.payload];
	default:
		return state;
	}
};


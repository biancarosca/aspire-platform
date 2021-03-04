export const developer = (state = {}, action) => {
	switch (action.type) {
	case "ADD_DEV":
		return {...state, ...action.payload};
	default:
		return state;
	}
};

export const education = (state = [], action) => {
	switch (action.type) {
	case "ADD_EDUCATION":
		return [...state, action.payload];
	case "DELETE_EDUC":
		return [...state.filter((group) => group.id !== action.payload)];
	default:
		return state;
	}
};

export const work = (state = [], action) => {
	switch (action.type) {
	case "ADD_WORK":
		return [...state, action.payload];
	case "DELETE_WORK":
		return [...state.filter((group) => group.id !== action.payload)];
	default:
		return state;
	}
};

export const portfolio = (state = [], action) => {
	switch (action.type) {
	case "ADD_PROJ":
		return [...state, action.payload];
	case "DELETE_PROJ":
		return [...state.filter((group) => group.id !== action.payload)];
	default:
		return state;
	}
};

export const socialLinks = (state = [], action) => {
	switch (action.type) {
	case "ADD_LINK":
		return [...state, action.payload];
	case "DELETE_LINK":
		return [...state.filter((group) => group.id !== action.payload)];
	default:
		return state;
	}
};

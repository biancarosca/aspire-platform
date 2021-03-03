export const addEducation = (educObj) => {
	const action = { type: "ADD_EDUCATION", payload: educObj };
	return action;
};

export const toggleSection = (value) => {
	const action = { type: "TOGGLE_STATE", payload: value };
	return action;
};



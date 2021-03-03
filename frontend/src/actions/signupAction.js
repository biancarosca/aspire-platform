export const addEducation = (educObj) => {
	const action = { type: "ADD_EDUCATION", payload: educObj };
	return action;
};

export const addWork = (workObj) => {
	const action = { type: "ADD_WORK", payload: workObj };
	return action;
};




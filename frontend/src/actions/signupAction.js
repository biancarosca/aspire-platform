export const addEducation = (educObj) => {
	const action = { type: "ADD_EDUCATION", payload: educObj };
	return action;
};

export const addWork = (workObj) => {
	const action = { type: "ADD_WORK", payload: workObj };
	return action;
};

export const addProject = (projObj) => {
	const action = { type: "ADD_PROJ", payload: projObj };
	return action;
};

export const addLink = (linkObj) => {
	const action = { type: "ADD_LINK", payload: linkObj };
	return action;
};

export const deleteGroupEduc = (id) => {
	const action = { type: "DELETE_EDUC", payload: id };
	return action;
};

export const deleteGroupWork = (id) => {
	const action = { type: "DELETE_WORK", payload: id };
	return action;
};

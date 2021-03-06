export const addUser = (userObj) => {
	const action = { type: "ADD_USER", payload: userObj };
	return action;
};

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

export const addAvatar = (avatar) => {
	const action = { type: "ADD_AVATAR", payload: avatar };
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

export const deleteGroupProjects = (id) => {
	const action = { type: "DELETE_PROJ", payload: id };
	return action;
};

export const deleteGroupLinks = (id) => {
	const action = { type: "DELETE_LINK", payload: id };
	return action;
};

export const toggleLogin = () => {
	const action = { type: "TOGGLE_LOGIN" };
	return action;
};

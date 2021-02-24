const pickRole = (role) => {
	const action = { type: "PICK_ROLE", payload: role };
	return action;
};

export default pickRole;

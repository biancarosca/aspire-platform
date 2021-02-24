const pickedRole = (state = null, action) => {
	switch (action.type) {
	case "PICK_ROLE":
		return action.payload;
	default:
		return state;
	}
};

export default pickedRole;

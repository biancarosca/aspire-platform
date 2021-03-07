const role = JSON.parse(localStorage.getItem("pickedRole"));
let initialState;
if(role)
	initialState = role;
else
	initialState = "developer";

const pickedRole = (state = initialState, action) => {
	switch (action.type) {
	case "PICK_ROLE":
		return action.payload;
	default:
		return state;
	}
};

export default pickedRole;

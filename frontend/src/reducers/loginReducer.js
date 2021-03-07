const initialState = localStorage.getItem("accessToken") ? true : false;

export const isLoggedIn = (state = initialState, action) => {
	switch (action.type) {
	case "SET_LOGIN":
		return action.payload;
	default:
		return state;
	}
};
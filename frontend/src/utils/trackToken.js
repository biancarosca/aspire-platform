import axios from "axios";
import jwt_decode from "jwt-decode";

//the refresh token is sent automatically by the browser

const trackToken = () => {
	const secondsSinceEpoch = Math.round(Date.now() / 1000);
	const accessToken = localStorage.getItem("accessToken");
	const decodedToken = jwt_decode(accessToken);
	if (decodedToken.exp > secondsSinceEpoch) {
		axios.post(
			"http://localhost:5000/api/developers/refresh_token",
			{},
			{ withCredentials: true, credentials: "include" }
		);
	}
};

export default trackToken;

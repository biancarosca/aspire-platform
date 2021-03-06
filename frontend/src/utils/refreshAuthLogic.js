import axios from "axios";
import jwt_decode from "jwt-decode";

//the refresh token is sent automatically by the browser

const refreshAuthLogic = async (failedRequest) => {
	const secondsSinceEpoch = Math.round(Date.now() / 1000);
	const accessToken = localStorage.getItem("accessToken");
	const decodedToken = jwt_decode(accessToken);
	if (decodedToken.exp < secondsSinceEpoch) {
		const developer = JSON.parse(localStorage.getItem("developer"));
		const id = developer.dev._id;
		try {
			const res = await axios.post(
				"http://localhost:5000/api/developers/refresh_token",
				{ id },
				{ withCredentials: true, credentials: "include" }
			);
			console.log(res);
			localStorage.setItem("accessToken", res.data.accessToken);
			failedRequest.response.config.headers["Authorization"] =
				"Bearer " + res.data.accessToken;
			return Promise.resolve();
		} catch (error) {
			console.log(error);
		}
	}
};

export default refreshAuthLogic;

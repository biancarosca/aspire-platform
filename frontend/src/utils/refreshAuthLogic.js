import axios from "axios";
import jwt_decode from "jwt-decode";

//the refresh token is sent automatically by the browser

const refreshAuthLogic = async (failedRequest) => {
	const secondsSinceEpoch = Math.round(Date.now() / 1000);
	const accessToken = localStorage.getItem("accessToken");
	const decodedToken = jwt_decode(accessToken);
	const pickedRole = JSON.parse(localStorage.getItem("pickedRole"));
	if (decodedToken.exp < secondsSinceEpoch) {
		const user = JSON.parse(localStorage.getItem("user"));
		let id;
		if(pickedRole === "developer")
			id = user.dev._id;
		else
			id = user.recruiter._id;
		try {
			const res = await axios.post(
				"http://localhost:5000/api/refresh_token",
				{ id, pickedRole },
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

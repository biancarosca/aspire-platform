const refreshToken = async (req, res) => {
	console.log(req);
	res.send();
	//need to get access to the refresh token from the cookie
	//compare it to the one from the database
	//if ok, generate a new access token
	//save to database
	//send it
};

module.exports = refreshToken;

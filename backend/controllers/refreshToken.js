const Developer = require("../models/devModel");
const Recruiter = require("../models/recruiterModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const refreshToken = async (req, res) => {
	//need to get access to the refresh token from the cookie
	const refreshToken = req.headers.cookie.split("=")[1];
	let User;
	if(req.body.pickedRole === "developer")
		User = Developer;
	else
		User = Recruiter;
	//compare it to the one from the database
	try {
		const user = await User.findById(req.body.id);
		if (!user) return res.status(404).send();

		const tokens = user.tokens;
		const tokenIdx = tokens.findIndex(
			(token) => token.token.refreshToken === refreshToken
		);
		if (tokens && tokenIdx !== -1) {
			delete user.tokens[tokenIdx];
			await user.save();
			//generate a new access token
			const accessToken = jwt.sign(
				{ _id: user._id.toString() },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "15s" }
			);
			//update the database
			user.tokens = user.tokens.concat({token: { accessToken, refreshToken }});
			await user.save();
			//send to client
			res.send({accessToken});
		}
	} catch (error) {
		res.status(400).send();
	}
};

module.exports = refreshToken;

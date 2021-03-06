const Developer = require("../models/devModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const refreshToken = async (req, res) => {
	//need to get access to the refresh token from the cookie
	const refreshToken = req.headers.cookie.split("=")[1];
	//compare it to the one from the database
	try {
		const dev = await Developer.findById(req.body.id);
		if (!dev) return res.status(404).send();

		const tokens = dev.tokens;
		const tokenIdx = tokens.findIndex(
			(token) => token.token.refreshToken === refreshToken
		);
		if (tokens && tokenIdx !== -1) {
			delete dev.tokens[tokenIdx];
			await dev.save();
			//generate a new access token
			const accessToken = jwt.sign(
				{ _id: dev._id.toString() },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "15s" }
			);
			//update the database
			dev.tokens = dev.tokens.concat({token: { accessToken, refreshToken }});
			await dev.save();
			//send to client
			res.send({accessToken});
		}
	} catch (error) {
		res.status(400).send();
	}
};

module.exports = refreshToken;

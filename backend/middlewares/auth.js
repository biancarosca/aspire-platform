const jwt = require("jsonwebtoken");
const Developer = require("../models/devModel");
require("dotenv").config();

//try to implement refresh tokens

//authorization
const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		const dev = await Developer.findOne({
			_id: decoded._id,
			"tokens.token.accessToken": token,
		});

		if (!dev) throw new Error();

		req.token = token;
		req.dev = dev;
		next();
	} catch (error) {
		res.status(401).send({ error: "Please authenticate." });
	}
};

module.exports = auth;
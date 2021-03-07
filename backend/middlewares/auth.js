const jwt = require("jsonwebtoken");
const Developer = require("../models/devModel");
const Recruiter = require("../models/recruiterModel");
require("dotenv").config();

//try to implement refresh tokens

//authorization
const auth = async (req, res, next) => {
	let User;
	if(req.body.pickedRole === "developer")
		User = Developer;
	else
		User = Recruiter;
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		const user = await User.findOne({
			_id: decoded._id,
			"tokens.token.accessToken": token,
		});

		if (!user) throw new Error();

		req.token = token;
		req.user = user;
		next();
	} catch (error) {
		res.status(401).send({ error: "Please authenticate." });
	}
};

module.exports = auth;
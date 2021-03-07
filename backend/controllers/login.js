const Developer = require("../models/devModel");
const Recruiter = require("../models/recruiterModel");

const login = async (req, res) => {
	try {
		//authentication
		//look in both collections to find the user
		const dev = await Developer.findByCredentials(
			req.body.email,
			req.body.password
		);
		const recruiter = await Recruiter.findByCredentials(
			req.body.email,
			req.body.password
		);
		if (!dev) return res.status(404).send();
		//provide authorization
		let user, role;
		if (dev) {
			user = dev;
			role = "developer";
		} else {
			user = recruiter;
			role = "recruiter";
		}
		const token = await user.generateAuthToken(res);
		user.password = undefined;
		res.send({ user, token, role });
	} catch (error) {
		res.status(400).send("Unable to login");
	}
};

module.exports = login;

const Recruiter = require("../models/recruiterModel");

const createRecruiter = async (req, res) => {
	const recruiter = new Recruiter(req.body);
	try{
		await recruiter.save();
		//once the recruiter is created, token is generated
		const accessToken = await recruiter.generateAuthToken(res);
		recruiter.password = undefined;	//remove password from response
		res.status(201).send({recruiter,accessToken});
	}catch(error){
		res.status(400).send(error);
	}
};

module.exports = createRecruiter;

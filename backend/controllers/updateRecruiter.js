const Recruiter = require("../models/recruiterModel");

const updateRecruiter = async (req, res) => {
	try{
		const recruiter = await Recruiter.findByIdAndUpdate(req.params.id,req.body.update,{new:true, runValidators: true});
		if (!recruiter) {
			return res.status(404).send();
		}

		await recruiter.save();
		if (!recruiter) return res.status(404).send();

		recruiter.password = undefined;
		res.send(recruiter);
	}catch(error){
		res.status(400).send(error);
	}
};

module.exports = updateRecruiter;

const Developer = require("../models/devModel");

const updateDeveloper = async (req, res) => {
	try{
		const dev = await Developer.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true});
		if (!dev) {
			return res.status(404).send();
		}
		res.send(dev);
	}catch(error){
		res.status(400).send(error);
	}
};

module.exports = updateDeveloper;

// const express = require("express");
const Developer = require("../models/devModel");

const createDeveloper = async (req, res) => {
	const dev = new Developer(req.body);
	try{
		await dev.save();
		//once the dev is created, token is generated
		const token = await dev.generateAuthToken();
		dev.password = undefined;	//remove password from response
		res.status(201).send({dev,token});
	}catch(error){
		res.status(400).send(error);
	}
};

module.exports = createDeveloper;

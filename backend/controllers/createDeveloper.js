// const express = require("express");
const Developer = require("../models/devModel");

const createDeveloper = async (req, res) => {
	const dev = new Developer(req.body);
	try{
		await dev.save();
		//once the dev is created, token is generated
		const accessToken = await dev.generateAuthToken(res);
		dev.password = undefined;	//remove password from response
		res.status(201).send({dev,accessToken});
	}catch(error){
		res.status(400).send(error);
	}
};

module.exports = createDeveloper;

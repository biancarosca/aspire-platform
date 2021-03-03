// const express = require("express");
const Developer = require("../models/devModel");

const createDeveloper = async (req, res) => {
	const dev = new Developer(req.body);
	try{
		await dev.save();
		res.send(dev);
	}catch(error){
		res.status(400).send(error);
	}
};

module.exports = createDeveloper;

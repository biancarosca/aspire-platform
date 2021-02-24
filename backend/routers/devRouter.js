const express = require("express");
const router = new express.Router();
// const Developer = require("../models/devModel");
const createDeveloper = require("../controllers/createDeveloper");


router.get("/developers", createDeveloper);

module.exports = router;
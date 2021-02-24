const express = require("express");
const router = new express.Router();
// const Developer = require("../models/devModel");
const createDeveloper = require("../controllers/createDeveloper");

router.post("/developers", createDeveloper);
router.get("/developers", (req, res) => res.send("got it"));

module.exports = router;

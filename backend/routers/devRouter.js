const express = require("express");
const router = new express.Router();
const createDeveloper = require("../controllers/createDeveloper");
const updateDeveloper = require("../controllers/updateDeveloper");

router.post("/developers", createDeveloper);
router.patch("/developers/:id", updateDeveloper);

module.exports = router;

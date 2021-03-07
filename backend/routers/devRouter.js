const express = require("express");
const router = new express.Router();
const createDeveloper = require("../controllers/createDeveloper");
const updateDeveloper = require("../controllers/updateDeveloper");
const auth = require("../middlewares/auth");

router.post("/developers", createDeveloper);
router.patch("/developers/:id",auth, updateDeveloper);

module.exports = router;

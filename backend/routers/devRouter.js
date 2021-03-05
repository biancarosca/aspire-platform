const express = require("express");
const router = new express.Router();
const createDeveloper = require("../controllers/createDeveloper");
const updateDeveloper = require("../controllers/updateDeveloper");
const refreshToken = require("../controllers/refreshToken");
const auth = require("../middlewares/auth");

router.post("/developers", createDeveloper);
router.patch("/developers/:id",auth, updateDeveloper);
router.post("/developers/refresh_token", refreshToken);

module.exports = router;

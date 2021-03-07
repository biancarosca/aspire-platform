const express = require("express");
const router = new express.Router();
const refreshToken = require("../controllers/refreshToken");

router.post("/refresh_token", refreshToken);

module.exports = router;

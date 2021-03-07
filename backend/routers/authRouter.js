const express = require("express");
const router = new express.Router();
const refreshToken = require("../controllers/refreshToken");
const login = require("../controllers/login");
const logout = require("../controllers/logout");
const auth = require("../middlewares/auth");

router.post("/refresh_token", refreshToken);
router.post("/login", login);
router.post("/logout",auth,logout);

module.exports = router;

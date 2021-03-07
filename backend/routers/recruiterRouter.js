const express = require("express");
const router = new express.Router();
const auth = require("../middlewares/auth");
const createRecruiter = require("../controllers/createRecruiter");
const updateRecruiter = require("../controllers/updateRecruiter");

router.post("/recruiters", createRecruiter);
router.patch("/recruiters/:id", auth, updateRecruiter);

module.exports = router;

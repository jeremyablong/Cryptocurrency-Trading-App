const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");


router.get("/", (req, res) => {
	res.send({ route: "This is the authenticate route." })
})

module.exports = router;
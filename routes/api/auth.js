const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.js");
const User = require("../../models/auth/User.js");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
// add route
// public
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.state(500).send("Server error.");
	}
});

// add - post route
// public
// authenticate user
router.post("/", [ 
		check("email", "Please include a valid email").isEmail(),
		check("password", "Password is required").exists()
	], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			errors: errors.array()
		});
	}

	const { name, email, password, avatar } = req.body;

	try {
		let user = await User.findOne({
			email: req.body.email
		})
		if (!user) {
			return res.status(400).json({
				errors: [
					{
						msg: "Invalid Credentials."
					}
				]
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({
				errors: [
					{
						msg: "Invalid Credentials."
					}
				]
			});
		}

		// return jsonwebtoken
		const payload = {
			user: {
				id: user.id
			}
		}

		jwt.sign(
			payload, config.get("jwtSecret"),
		{ expiresIn: 360000 }, (err, token) => {
			if (err) {
				throw err
			} 
			res.json({ token })
		});
	} catch (error) {
		console.error(error.message);
		return res.status(500).send("Server error.");
	}
});

module.exports = router;
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");


const User = require("../../models/auth/User.js");
// add route
// public
// register user
router.post("/", [
		check("name", "Name is required").not().isEmpty(), 
		check("email", "Please include a valid email").isEmail(),
		check("password", "Please enter a password with 6 or more charactors").isLength({
			min: 6
		})
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
		if (user) {
			return res.status(400).json({
				errors: [
					{
						msg: "User already exists"
					}
				]
			});
		}

		const avatar = gravatar.url(email, {
			s: "200",
			r: "pg",
			d: "mm"
			// could use 404 for no avatar found ^^^^^
		})

		user = new User({
			name,
			email,
			avatar,
			password
		})
		// encrypt password with bcrypt
		const salt = await bcrypt.genSalt(10);

		user.password = await bcrypt.hash(password, salt);

		await user.save();
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
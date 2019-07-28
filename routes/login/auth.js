const express = require("express");
const router = express.Router();
const LoginUser = require("../../models/auth/Login.js");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Nexmo = require('nexmo');

// verfiy token
function verifyToken (req, res, next) {
	const bearerHeader = req.headers['authorization'];

	if (typeof bearerHeader !== undefined) {
		return null
	} else {
		// forbidden
		res.sendStatus(403);
	}
}

mongo.connect(config.get("mongoURI"), verifyToken, cors(), function(err, db) {
	router.post('/', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    	db.collection('users', function(err, collection) {
	        collection.findOne({ 
	        	email: req.body.email
	        }, function(err, item) {	
	        	if (err) {
	        		console.log(err);
	        	}
		       	if (item) {
		       		if (item.email === req.body.email && item.password === req.body.password) {

						jwt.sign({ user: item }, "secretkey", (err, token) => {
			       			if (err) {
			       				console.log(err)
			       			}
			       			// nexmo.message.sendSms(from, to, text);
							res.json({
								token: token,
								item
							})
							
							res.send(token);
			       		})
				    } else {
				    	return res.json({ user: "Email NOT found, account couldn't be authenticated." });
				    }
		       	}  else {
				    return res.json({ user: "Email NOT found, account couldn't be authenticated." });
				}
		    });
    	});
	})
})





module.exports = router;
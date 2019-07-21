const express = require("express");
const router = express.Router();
const User = require("../../models/auth/User.js");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");

// add route
// public
mongo.connect(config.get("mongoURI"), cors(), function(err, db) {
	router.post('/', function(req, res) {
		const { firstName, lastName, email, password, number, secret } = req.body;
		const NewUser = new User(req.body);
		res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    	db.collection('users', function(err, collection) {
	        collection.find({ 
	        	email: email
	        }, function(err, item) {	
	        	if (err) {
	        		console.log(err);
	        	}
				NewUser.save((error, docs) => {
					if (error) {
						console.log("Error during registration.");
					} else {
						console.log("Valid registration.")
					}
				});
		    });
			// return res.json({ user: "Email NOT found, account couldn't be authenticated." });
    	});
	res.end();
})
});


mongo.connect(config.get("mongoURI"), cors(), function(err, db) {
	router.get('/', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		db.collection("users").find({}).toArray(function (err, result) {
			console.log(result);
			if (err) {
				console.log(err);
			}
			res.send(result);
		});

	});

});

module.exports = router;
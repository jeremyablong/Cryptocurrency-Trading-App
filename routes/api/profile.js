const express = require("express");
const router = express.Router();
const User = require("../../models/auth/User.js");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");
const jwt = require("jsonwebtoken");

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
	        	jwt.sign({ id: item._id }, "secretkey", { expiresIn: 3600 }, (err, token) => {
	       			if (err) {
	       				console.log(err)
	       			}
					return res.json({
						token: token
					})
					console.log(token)
					return res.cookie('token', token, { httpOnly: true }).sendStatus(200);
					console.log(token)
	       		})
				NewUser.save((error, docs) => {
					if (error) {
						console.log("Error during registration.");
					} else {
						console.log("Valid registration.")
					}
				});
				return null;
		    });
			// return res.json({ user: "Email NOT found, account couldn't be authenticated." });
    	});
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
	        // jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
	        //     if(err){
	        //         //If error send Forbidden (403)
	        //         console.log('ERROR: Could not connect to the protected route');
	        //         res.sendStatus(403);
	        //     } else {
	        //         //If token is successfully verified, we can send the autorized data 
	        //         res.json({
	        //             message: 'Successful log in',
	        //             authorizedData
	        //         });
	        //         console.log('SUCCESS: Connected to protected route');
	        //     }
	        // })
			res.send(result);
		});

	});

});

module.exports = router;
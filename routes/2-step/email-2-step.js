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

		var kickbox = require('kickbox').client('test_22e5966860f27aa7d2ab1740ce1dd1bf0db7638448fcc6afe55aa8913403c2d4').kickbox();

		kickbox.verify("jeremyablong@icloud.com", function (err, response) {
		  // Let's see some results
		  console.log(response.body);
		});

		// const { firstName, lastName, email, password, number, secret } = req.body;
		// const NewUser = new User(req.body);
		// res.header("Access-Control-Allow-Origin", "*");
	 //    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   	db.collection('users', function(err, collection) {
	 //        collection.find({ 
	 //        	email: email
	 //        }, function(err, item) {	
	 //        	if (err) {
	 //        		console.log(err);
	 //        	}
	 //        	jwt.sign({ id: item._id }, "secretkey", { expiresIn: 3600 }, (err, token) => {
	 //       			if (err) {
	 //       				console.log(err)
	 //       			}
		// 			res.json({
		// 				token: token
		// 			})
		// 			console.log(token)
		// 			res.cookie('token', token, { httpOnly: true }).sendStatus(200);
		// 			console.log(token)
	 //       		})
		// 		NewUser.save((error, docs) => {
		// 			if (error) {
		// 				console.log("Error during registration.");
		// 			} else {
		// 				console.log("Valid registration.")
		// 			}
		// 		});
		// 		return null;
		//     });
		// 	// return res.json({ user: "Email NOT found, account couldn't be authenticated." });
  //   	});
	})
});


module.exports = router;
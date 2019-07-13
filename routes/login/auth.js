const express = require("express");
const router = express.Router();
const LoginUser = require("../../models/auth/Login.js");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");


mongo.connect(config.get("mongoURI"), cors(), function(err, db) {

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
	        	console.log(item);
	        	console.log("Start log for authentication...");
		       	if (item) {
		       		if (item.email === req.body.email && item.password === req.body.password) {
				        return res.json({ user: "Email found, account verified.." });
				    }
			        res.send(item);
		       	}  else {
				    return res.json({ user: "Email NOT found, account couldn't be authenticated." });
				}
		      
		    });
			// return res.json({ user: "Email NOT found, account couldn't be authenticated." });
    	});

	})

})
module.exports = router;
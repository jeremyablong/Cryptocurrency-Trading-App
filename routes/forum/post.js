const express = require("express");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");
const router = express.Router();
const User = require("../../models/forum/post.js");

mongo.connect(config.get("mongoURI"), cors(), function(err, db) {

	router.post('/', async function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    		const { title, subTitle, body } = req.body;
			db.collection("generals").find({ title: req.body.title }).toArray((err, result) => {
				console.log(result);
			});

			

	        let user = new User({
	        	title, 
	        	subTitle,
	        	body
	        })
			
			if (!title && !subTitle && !body) {
				user.save((err) => {
					if (err) {
						console.log(err);
					}
		        });
			}
	      
	        if (user) {
	        	return res.json({ user: "User successfully added." })
	        } else {
	        	return res.json({ error: "User was not added properly." })
	        }
	})
})
module.exports = router;
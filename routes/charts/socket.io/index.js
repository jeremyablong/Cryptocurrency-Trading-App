const express = require("express");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");
const app = express();
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');
const http = require("http");
const https = require("https");



router.get("/", (req, res) => {	

		const options = "https://api-public.sandbox.pro.coinbase.com";

		https.get(options, (resp) => {
		  let data = '';

		  // A chunk of data has been recieved.
		  resp.on('data', (chunk) => {
		    data += chunk;
		    console.log(data)
		    return data;
		  });

		  resp.on('end', () => {
		    res.send(data)
		    console.log("sent.")
		  });
	});
});

module.exports = router;
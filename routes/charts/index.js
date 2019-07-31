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
// Loading the index file . html displayed to the client
// var server = http.createServer(function(req, res) {
	
// });

// // Loading socket.io
// var io = require('socket.io');

router.get("/", (req, res) => {	
	
	// let io = req.app.get("socketio");
	// // When a client connects, we note it in the console
	// io.sockets.on('connection', function (socket) {
	  
	//     console.log('A client is connected!');

		const url = "https://"
		var options = {
		  "method": "GET",
		  "hostname": "rest.coinapi.io",
		  "path": "/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1HRS",
		  "headers": {'X-CoinAPI-Key': '8CA1D81F-B5A8-49FE-87B3-5630DE1A7A96'}
		};





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
		  // The whole response has been received. Print out the result.
		  // resp.on('end', () => {
		  //   console.log(JSON.parse(data).explanation);
		  // });

		// }).on("error", (err) => {
		//   console.log("Error: " + err.message);
		// });
	});
	// axios.get(url, options)
	//   .then((response) => {
	//     let json = CircularJSON.stringify(response);
	//     let data = JSON.parse(json);
	//     res.send(data.data);
	//   })
	//   .catch((error) => {
	//     console.log(error);
	//   });
});

module.exports = router;
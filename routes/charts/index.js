const express = require("express");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");
const app = express();
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');
const request = require("request");

router.get("/", (req, res) => {	


	
	// const WebSocket = require("ws");


	// const host = 'wss://www.quidax.com:8080';
	// const Socket = new WebSocket(host);

	// Socket.onopen = function() {
	//   Console.log("opened");
	// }

	// Socket.onmessage = function(msg) {
	//   Console.log(msg);
	// }

	// Socket.onclose = function() {
	//   Console.log("closed");
	// }

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
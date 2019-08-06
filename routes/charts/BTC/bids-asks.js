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
const WebSocket = require('ws');
// var socket = require('socket.io-client')('http://localhost:8000');



router.get("/", (req, res) => {	
	
	// var ws = new WebSocket("wss://ws-sandbox.coinapi.io/v1/");

	const ws = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');

	ws.on('open', function open() {
	  ws.send(JSON.stringify({
		  "type": "hello",
		  "apikey": "8CA1D81F-B5A8-49FE-87B3-5630DE1A7A96",
		  "heartbeat": true,
		  "subscribe_data_type": ["quote"],
		  "subscribe_filter_asset_id": ["BTC", "ETH"],
		  "time_exchange": "2019-08-05T03:25:00.0000000Z"
		}))
	});

	ws.on('message', function incoming(data) {
		console.log(data)
	});
	// ws.onopen = function(evt) { 
	//   console.log("Connection open ..."); 
	//   ws.send("Hello WebSockets!");
	// };

	// ws.onmessage = function(evt) {
	// 	console.log("message")
	// 	ws.send(JSON.stringify({
	// 			  "type": "hello",
	// 			  "apikey": "8CA1D81F-B5A8-49FE-87B3-5630DE1A7A96",
	// 			  "heartbeat": true,
	// 			  "subscribe_data_type": ["quote"],
	// 			  "subscribe_filter_asset_id": ["BTC", "ETH"]
	// 			}))
	//   ws.close();
	// };

	// ws.onclose = function(evt) {
	//   console.log("Connection closed.");
	// }; 


});

module.exports = router;
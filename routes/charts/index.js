const express = require("express");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");
const app = express();
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');


router.get("/", (req, res) => {	
	// const https = require('https');

	// const url = "http://localhost:5000";

	// var options = {
	//   "method": "GET",
	//   "hostname": "http://rest.coinapi.io",
	//   "Content-Type": "text/plain",
	//   "path": "/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN",
	//   "headers": {'X-CoinAPI-Key': '57F960B2-4279-44B7-8474-49F314CF6834'}
	// };
	// request(options, { json: true }, (err, res, body) => {
	//   if (err) { return console.log(err); }
	//   console
	// });
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
const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const router = express.Router();
const graphqlHTTP = require("express-graphql");
const socketIo = require("socket.io");
// init middleware
const bodyParser = require('body-parser');
const graphqlSchemaIntervals = require("./schemas/cryptoIntervalTimes.js");
const graphqlSchema = require("./schemas/schema.js");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const axios = require("axios");
const fs = require('fs');
const https = require("https");
const http = require("http");
const CircularJSON = require("circular-json");
const BJSON = require('buffer-json')
const server = http.createServer(app);
const io = socketIo(server);
const WebSocket = require('ws');

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
	// console.log(data)
});


// const port = process.env.PORT || 8080;

// graphqlSchemaIntervals
app.use(cors());
app.options('*', cors());


connectDB();


app.set('socketio', io);


app.use(cookieParser());

app.use("/graphql", cors(), graphqlHTTP({
	schema: graphqlSchema,
	graphiql: true
}));

app.use(bodyParser.json())
// define routes 
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/auth/login", require("./routes/login/auth.js"));
app.use("/auth/logout", require("./routes/login/logout.js"));
app.use("/forum/post", require("./routes/forum/post.js"));
app.use("/authenticate", require("./routes/api/authenticate.js"));
app.use("/twostep/authenitcate", require("./routes/2-step/email-2-step.js"));
app.use("/chart/data", require("./routes/charts/index.js"));
app.use("/chart/gdax", require("./routes/charts/socket.io/index.js"));
app.use("/btc/bids-asks", require("./routes/charts/BTC/bids-asks.js"));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.get('*', function(req, res) {
  res.sendFile(__dirname, './client/public/index.html')
})

if (process.env.NODE_ENV === "production") {
	// Express will serve up production files
	app.use(express.static("client/build"));
	// serve up index.html file if it doenst recognize the route
	app.get('*', cors(), function(_, res) {
	  res.sendFile(__dirname, './client/build/index.html'), function(err) {
	    if (err) {
	      res.status(500).send(err)
	    }
	  }
	})
}; 

// server.listen(port, () => console.log(`Listening on port ${port}`));


const PORT = process.env.PORT || 5000;


// // When a client connects, we note it in the console
// io.sockets.on('connection', function (socket) {
//     console.log('A client is connected!');

// 	const url = "https://"

// 	var options = {
// 	  "method": "GET",
// 	  "hostname": "rest.coinapi.io",
// 	  "Content-Type": "application/json",
// 	  "path": "/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN",
// 	  "headers": {'X-CoinAPI-Key': '57F960B2-4279-44B7-8474-49F314CF6834'}
// 	};


// 	https.get(options, (resp) => {
// 	  let data = '';

// 	  // A chunk of data has been recieved.
// 	  resp.on('data', (chunk) => {
// 	    data += chunk;
// 	    console.log(data)
// 	  });

// 	  // The whole response has been received. Print out the result.
// 	  // resp.on('end', () => {
// 	  //   console.log(JSON.parse(data).explanation);
// 	  // });

// 	}).on("error", (err) => {
// 	  console.log("Error: " + err.message);
// 	});
// });


// io.listen(SOCKET_PORT, () => {
// 	console.log(`Socket.io listening on port ${SOCKET_PORT}`)
// });

app.listen(PORT, () => {
	console.log(`App is listening at port ${PORT}`)
})













//
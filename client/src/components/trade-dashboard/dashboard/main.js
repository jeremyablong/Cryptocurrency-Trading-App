import React, { Component } from 'react';
import axios from "axios";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import socketIOClient from "socket.io-client";

// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TradingDashboard extends Component {
constructor () {
	super();

	this.state = {
		data: [],
		timestamp: "No timestamp yet.",
		response: false,
		endpoint: "ws://localhost:8000"
	}

}
	componentDidMount () {
		// const { endpoint } = this.state;

		// const socket = socketIOClient(endpoint);
		// axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&currency=BTC&start=2019-07-18T00:00:00Z&end=2019-07-24T00:00:00Z").then((res) => {
		// 	console.log(res.data);
		// 	this.setState({
		// 		data: res.data
		// 	})
		// }).catch((err) => {
		// 	console.log(err);
	 //    });

		// socket.emit("api call", () => {
		// 	axios.get("wss://ws-sandbox.coinapi.io/v1/").then((res) => {
		// 		console.log(res.data);
		// 		this.setState({
		// 			data: res.data
					
		// 		})
		// 	}).catch((err) => {
		// 		console.log(err);
		//     });
		// // })
		// const socket = socketIOClient('http://localhost:8000/');

			// const result = axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&currency=BTC&start=2019-07-18T00:00:00Z&end=2019-07-24T00:00:00Z").then((res) => {
			// 	console.log(res.data);
			// }).catch((err) => {
			// 	console.log(err);
		 // //    });

		 //  socket.on('connect', (socket) => {
		 //    console.log("Socket Connected");
				
			//     }, 5000);
		  
		 //  socket.on('disconnect', () => {
		 //    socket.removeAllListeners("api call");
		 //    console.log("Socket Disconnected");
		 //  });
		
		// setInterval(() => {
	    	


	}
	// renderRoute = () => {
	// 	axios.get("/chart/data").then((res) => {
	// 	console.log(res.data);
	// 		this.setState({
	// 			data: res.data
				
	// 		})
	// 	}).catch((err) => {
	// 		console.log(err);
	//     });
	// }
	render() {
		// console.log(this.state.data)
		// const { response, timestamp } = this.state;
		// let newArr = [];
		// let count = 0;
		// let result = this.state.data.map((item) => {
		// 	console.log(item)
		// 	let date = new Date(item.timestamp).toLocaleDateString("en-US")
		// 	let s = new Date(item.timestamp).toLocaleTimeString("en-US") 
		// 	return { x: item.timestamp, y: [Math.round(item.open), Math.round(item.low), Math.round(item.high), Math.round(item.close)] }
		// 	// return { name: date + " " + s, USD: Number(item.price_open), amt: Number(item.high) };
		// })

		// let high = this.state.data.map((item) => {
		// 	return Number(Math.round(item.high));
		// })
		// const highest = [];

		// highest.push(high);
		
		// const top = highest.reduce(function(prev, current) {
		//     return (prev > current) ? prev : current
		// }) 
		// const bottom = highest.reduce(function(prev, current) {
		//     return (prev < current) ? prev : current
		// }) 

		// const amounts = highest.map((a) => a)

		// const highestAmount = Math.max(...top);
		// const lowestAmount = Math.min(...bottom);
		
		// ////////////////////// SEPERATOR //////////

		// const options = {
		// 	theme: "light2", // "light1", "light2", "dark1", "dark2"
		// 	animationEnabled: true,
		// 	exportEnabled: true,
		// 	title:{
		// 		text: "Intel Corporation Stock Price -  2017"
		// 	},
		// 	axisX: {
		// 		valueFormatString: "MMM"
		// 	},
		// 	axisY: {
		// 		includeZero:false,
		// 		prefix: "$",
		// 		title: "Price (in USD)"
		// 	},
		// 	data: [{
		// 		type: "candlestick",
		// 		showInLegend: true,
		// 		name: "Intel Corporation",
		// 		yValueFormatString: "$###0.00",
		// 		xValueFormatString: "MMMM YY",
		// 		dataPoints: result
		// 		// [
				// 	{ x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
				// 	{ x: new Date("2017-02-01"), y: [36.82, 36.95, 34.84, 36.20] },
				// 	{ x: new Date("2017-03-01"), y: [35.85, 36.30, 34.66, 36.07] },
				// 	{ x: new Date("2017-04-01"), y: [36.19, 37.50, 35.21, 36.15] },
				// 	{ x: new Date("2017-05-01"), y: [36.11, 37.17, 35.02, 36.11] },
				// 	{ x: new Date("2017-06-01"), y: [36.12, 36.57, 33.34, 33.74] },
				// 	{ x: new Date("2017-07-01"), y: [33.51, 35.86, 33.23, 35.47] },
				// 	{ x: new Date("2017-08-01"), y: [35.66, 36.70, 34.38, 35.07] },
				// 	{ x: new Date("2017-09-01"), y: [35.24, 38.15, 34.93, 38.08] },
				// 	{ x: new Date("2017-10-01"), y: [38.12, 45.80, 38.08, 45.49] },
				// 	{ x: new Date("2017-11-01"), y: [45.97, 47.30, 43.77, 44.84] },
				// 	{ x: new Date("2017-12-01"), y: [44.73, 47.64, 42.67, 46.16] }
				// ]
		// 	}
		//   ]
		// }
		return (
			<div>
			<div>
		{/*	<CanvasJSChart options={options}
				onRef={ref => this.chart = ref}
			/>*/}
				{/*<div className="container">
					<div className="col-md-12">
						<h5 className="text-center"> ETHERIUM - ETH - Hover over the line graph to view details </h5>
					</div>
				</div>
					 <ResponsiveContainer width="99%" aspect={3}>
						<LineChart 
					        width={1500} 
					        height={300} 
					        data={result} 
					        margin={{
					          top: 5, right: 30, left: 70, bottom: 5,
					        }}
					      >
					        <CartesianGrid strokeDasharray="3 3" />
					        <XAxis dataKey="name" />
					        <YAxis domain={[lowestAmount, highestAmount]} />
					        <Tooltip />
					        <Legend />
					        <Line type="monotone" dataKey="USD" stroke="#8884d8" strokeWidth={3} dot={false}/>
					        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} dot={false} />
					    </LineChart>
					</ResponsiveContainer>*/}
			</div> 
			<button className="btn btn-danger">YES</button>
			</div>

		);
	}
}
export default TradingDashboard;
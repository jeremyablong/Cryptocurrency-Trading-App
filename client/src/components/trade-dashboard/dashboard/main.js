import React, { Component } from 'react';
import axios from "axios";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import socketIOClient from "socket.io-client";
// import { apikey } from "../../../helper.js";

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
		const { endpoint } = this.state;

		const socket = socketIOClient(endpoint);

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
		 //    });

		  socket.on('connect', (socket) => {
		    console.log("Socket Connected");
				
			    }, 5000);
		  
		  socket.on('disconnect', () => {
		    socket.removeAllListeners("api call");
		    console.log("Socket Disconnected");
		  });
		
		// setInterval(() => {
	    	


	}
	renderRoute = () => {
		axios.get("/chart/data").then((res) => {
		console.log(res.data);
			this.setState({
				data: res.data
				
			})
		}).catch((err) => {
			console.log(err);
	    });
	}
	render() {
		const { response, timestamp } = this.state;
				let newArr = [];
				let count = 0;
				let result = this.state.data.map((item) => {
					let date = new Date(item.timestamp).toLocaleDateString("en-US")
					let s = new Date(item.timestamp).toLocaleTimeString("en-US") 
					return { name: date + " " + s, USD: Number(item.high), amt: Number(item.high) };
				})

				let high = this.state.data.map((item) => {
					return Number(Math.round(item.high));
				})
				const highest = [];

				highest.push(high);
				
				const top = highest.reduce(function(prev, current) {
				    return (prev > current) ? prev : current
				}) 
				const bottom = highest.reduce(function(prev, current) {
				    return (prev < current) ? prev : current
				}) 

				const amounts = highest.map((a) => a)

				const highestAmount = Math.max(...top);
				const lowestAmount = Math.min(...bottom);

		return (
			<div>
				<div>
				<div className="container">
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
					</ResponsiveContainer>
			</div> 
			<button onClick={this.renderRoute} className="btn btn-danger">YES</button>
			</div>

		);
	}
}
export default TradingDashboard;
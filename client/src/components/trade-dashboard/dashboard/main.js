import React, { Component } from 'react';
import axios from "axios";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import moment from 'moment';
import socketIOClient from "socket.io-client";
import CanvasJSReact from "./canvasjs.react.js";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const CRYPTO_QUERY = gql`
	query {
	  graphDisplayData {
	    name
	    market_cap
	    circulating_supply
	    price
	    high
	  }
	}
`;




class TradingDashboard extends Component {
constructor () {
	super();

	this.state = {
		data: [],
		timestamp: "No timestamp yet.",
		response: false,
		endpoint: "ws://localhost:8000",
		numOfTrades: "",
		dataSetTwo: []
	}

}
	componentDidMount () {
		// const { endpoint } = this.state;
		// const socket = socketIOClient(endpoint);
		// axios.get("https://api.nomics.com/v1/exchange_candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&exchange=binance&market=BTCUSDT&start=2019-07-15T00%3A00%3A00Z&end=2024-05-14T00%3A00%3A00Z").then((res) => {
		// 	this.setState({
		// 		data: res.data
		// 	})
		// }).catch((err) => {
		// 	console.log(err);
	 //    });

	    axios.get("/chart/data").then((res) => {
			this.setState({
				data: res.data
			})
		}).catch((err) => {
			console.log(err);
	    });

	 //    y: [Math.round(item.price_open), Math.round(item.price_high), Math.round(item.price_low), Math.round(item.price_close)]
		// window.setInterval(() => {
		// 	axios.get("https://api.nomics.com/v1/exchange_candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&exchange=binance&market=BTCUSDT&start=2019-07-15T00%3A00%3A00Z&end=2024-05-14T00%3A00%3A00Z").then((res) => {
		// 			console.log(res.data)
		// 			this.setState({
		// 				data: res.data
		// 			})
		// 		}).catch((err) => {
		// 			console.log(err);
		// 	    });
		//   }, 2000)

		// axios.get("https://api.nomics.com/v1/orders/snapshot?key=561df32fa25fd3d93ae7064e0da5c8a2&exchange=binance&market=BTCUSDT&at=2019-04-01T12%3A00%3A00Z").then((response) => {
		// 	console.log(response)
		// 	this.setState({
		// 		dataSetTwo: response.data
		// 	})
		// }).catch((err) => {
		// 	console.log(err)
		// })
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
		const { response, timestamp } = this.state;
		let newArr = [];
		let count = 0;
		let result = this.state.data.map((item) => {
			console.log(item)

			return { x: new Date(item.time_open), y: [Math.round(item.price_open), Math.round(item.price_high), Math.round(item.price_low), Math.round(item.price_close)] }
			// return { name: date + " " + s, USD: Number(item.price_open), amt: Number(item.high) };
		})

		// ////////////////////// SEPERATOR //////////

		const options = {
			 // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			backgroundColor: "black",
			colorSet: "green",
			height: 550,
			zoomEnabled: true, 
			title:{
				fontColor: "red",
				text: "Bitcoin - BTC",
				fontWeight: "normal"
			},
			axisX: {
				crosshair : {
					enabled: true,
					color: "red",
					labelFontColor: "#F8F8F8"
				},
				valueFormatString: "MM DD YYYY",
				titleFontColor: "white",
				labelFontColor: "red",
			
			},
			axisY: {
				crosshair : {
					enabled: true,
					color: "red",
					labelFontColor: "#F8F8F8"
				},
				includeZero:false,
				prefix: "$",
				labelFontColor: "red",
				title: "Price (in USD)",
				titleFontColor: "white",
			},
			legend: {
				fontColor: "white"
			},
			data: [{
				type: "candlestick",
				risingColor: "lightgreen", 
				fallingColor: "red",
				showInLegend: true,
				name: "Crypto Stock Prices",
				yValueFormatString: "$###0.00",
				xValueFormatString: "DD DDD MMM YYYY HH:mm:ss",
				dataPoints: result
				// result
				// [
				// 	{ x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
				// ]
			}
		  ]
		}
		return (
			<div>
			<div>
					<CanvasJSChart options={options}
						onRef={ref => this.chart = ref}
					/>
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
		<div className="row">
{/*			<div className="col-md-4 ">
				<ul className="list_list">
					<Query query={CRYPTO_QUERY}>
				      {({ data, loading, error }) => {
				        if (loading) {
				        	return <h1>loading</h1>
				        };
				        if (error) {
				        	return <p>ERROR</p>
				        };
						if (data) {
							return (
					          <Fragment>
					            <Header />
					            {data.launches &&
					              data.launches.launches &&
					              data.launches.launches.map(launch => (
					                <LaunchTile
					                  key={launch.id}
					                  launch={launch}
					                />
					              ))}
					          </Fragment>
					        );
							}
				      }}
				    </Query>
				</ul>
			</div>*/}
			<div className="col-md-4">

			</div>
			<div className="col-md-4">

			</div>
		</div>
			<button className="btn btn-danger">YES</button>
			</div>

		);
	}
}
export default TradingDashboard;
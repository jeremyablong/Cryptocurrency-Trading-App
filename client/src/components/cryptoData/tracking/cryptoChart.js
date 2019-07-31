import React, { Component } from 'react';
import Chart from 'chart.js';
import "./track.css";
import { connect } from "react-redux";
import { generateCryptoData } from "../../../actions/index.js";
import store from "../../../store/store.js";
import axios from "axios";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Etherium from "./crypto-charts/etherium.js";
import XRP from "./crypto-charts/XRP.js";
import BitcoinCash from "./crypto-charts/bitcoinCash.js";
import Litecoin from "./crypto-charts/litecoin.js";
import XLM from "./crypto-charts/XLM.js";
import TableData from "../../api-results-display/table/table.js";



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


class CryptoChart extends Component {
constructor () {
	super();

	this.state = {
		data: [],
		bitcoinData: [],
		timestamp: [],
		high: [],
		ethOpen: false,
		bitcoinOpen: true,
		XRPopen: false,
		bitcoinCashOpen: false,
		litecoinOpen: false,
		xlmOpen: false
	}
}
	componentDidMount () {
		let date = new Date();
		// let timeStamp = date.getTime();
		this.props.generateCryptoData()
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		axios.get(proxyurl + "https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&currency=BTC&start=2019-07-18T00:00:00Z&end=2029-07-2T00:00:00Z").then((res) => {
			this.setState({
				data: res.data
			})
		}).catch((err) => {
			console.log(err);
		});
		return this.state.data.map((item) => {
			this.setState({
				timestamp: item.timestamp,
				high: item.high
			})
		})
	};
	renderCurrencies = () => {
		// const { data } = this.state;
		// return data.map((item, index) => {
		// 	return (
		// 		<div key={index} className="col-md-4">
		// 			<div className="card crypto_card" style={{ width: "100%" }}>
		// 				<img className="card-img-top" src={require("../../../images/102.jpg")} alt="Card image cap"/>
		// 				  <div className="card-body crypto_container">
		// 				    <h5 className="card-title"><span className="turn_red">{item.currency}</span> - Current Price = {Math.round(item.price * 100) / 100}</h5>
		// 				    <p className="card-text">{item.name}</p>
		// 				  	<p className="text-left"><span className="turn_red">All Time High</span> - {Math.round(item.high * 100) / 100}</p>
		// 				    <p className="text-left"><span className="turn_red">Date of occurance</span> - {item.high_timestamp}</p>
		// 				    <p className="text-left"><span className="turn_red">Circulating Supply</span> - {item.circulating_supply} coins</p>
		// 				    <a onClick={this.conditionallyRenderCoinInfo} href="/tracking/table" className="btn btn-primary">View More Details</a>
		// 				  </div>
		// 			</div>
		// 		</div>
		// 	);
		// })
	};
	renderAllCharts = () => {
		if (this.state.ethOpen) {
			return <Etherium />
		} else if (this.state.XRPopen && this.state.bitcoinOpen === false) {
			return <XRP />
		} else if (!this.state.ethOpen && !this.state.bitcoinOpen && !this.state.XRPopen && this.state.bitcoinCashOpen) {
			return <BitcoinCash />
		} else if (!this.state.ethOpen && !this.state.bitcoinOpen && !this.state.XRPopen && !this.state.bitcoinCashOpen && this.state.litecoinOpen) {
			return <Litecoin />
		} else if (!this.state.ethOpen && !this.state.bitcoinOpen && !this.state.XRPopen && !this.state.bitcoinCashOpen && !this.state.litecoinOpen && this.state.xlmOpen) {
			return <XLM />
		} 
	};
	render() {
		let newArr = [];
		let count = 0;
		let result = this.state.data.map((item) => {
			// console.log(item)
			let date = new Date(item.timestamp).toLocaleDateString("en-US")
			let s = new Date(item.timestamp).toLocaleTimeString("en-US") 
			return { name: date + " " + s, USD: Number(item.high), amt: Number(item.high) };
		})

		let high = this.state.data.map((item) => {
			return Number(Math.round(item.high));
		})
		const highest = [];

		highest.push(high);

		// console.log(highest)
		
		const top = highest.reduce(function(prev, current) {
		    return (prev > current) ? prev : current
		}) 
		const bottom = highest.reduce(function(prev, current) {
		    return (prev < current) ? prev : current
		}) 
		// console.log(top)
		const amounts = highest.map((a) => a)

		const highestAmount = Math.max(...top);
		const lowestAmount = Math.min(...bottom);
		// console.log(highestAmount)
		// console.log(Math.round(lowestAmount))
		// const options = {
		// 	animationEnabled: true,
		// 	exportEnabled: true,
		// 	theme: "light3", // "light1", "dark1", "dark2"
		// 	title:{
		// 		text: "Bitcoin Hourly Fluxuation"
		// 	},
		// 	axisY: {
		// 		title: "Bounce Rate",
		// 		includeZero: false,
		// 		suffix: " USD"
		// 	},
		// 	axisX: {
		// 		title: "Dates",
		// 		ticks: 10,
		// 		prefix: `${new Date(this.props.timestamp)}`
		// 	},
		// 	data: [{
		// 		type: "line",
		// 		toolTipContent: "Week {x}: {y} USD",
		// 		dataPoints: result
		// 	}]
		// }
		return (
			<div style={{ marginTop: "40px" }}>
			<div className="row">
				<div className="col-md-12">
					<button onClick={() => {
						this.setState({
							ethOpen: false,
							bitcoinOpen: true
						})
					}} style={{ marginLeft: "20px" }} className="btn btn-danger btn_btn">Bitcoin</button>
					<button onClick={() => {
						this.setState({
							ethOpen: true,
							bitcoinOpen: false
						})
					}} className="btn btn-info btn_btn">Ethereum</button>
					<button onClick={() => {
						this.setState({
							ethOpen: false,
							bitcoinOpen: false,
							XRPopen: true
						})
					}} className="btn btn-warning btn_btn">XRP</button>
					<button onClick={() => {
						this.setState({
							ethOpen: false,
							bitcoinOpen: false,
							XRPopen: false,
							bitcoinCashOpen: true
						})
					}}  className="btn btn-success btn_btn">Bitcoin Cash</button>
					<button onClick={() => {
						this.setState({
							ethOpen: false,
							bitcoinOpen: false,
							XRPopen: false,
							bitcoinCashOpen: false,
							litecoinOpen: true
						})
					}} className="btn btn-warning btn_btn">LiteCoin</button>
					<button onClick={() => {
						this.setState({
							ethOpen: false,
							bitcoinOpen: false,
							XRPopen: false,
							bitcoinCashOpen: false,
							litecoinOpen: false,
							xlmOpen: true
						})
					}} className="btn btn-danger btn_btn">Sellar Lumens</button>
				</div>
			</div>
			{this.renderAllCharts()}
			{this.state.bitcoinOpen && !this.state.ethOpen ? 	<div>
		<div className="container">
			<div className="col-md-12">
				<h5 className="text-center"> BITCOIN - BTC - Hover over the line graph to view details </h5>
			</div>
		</div> <ResponsiveContainer width="99%" aspect={3}>
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
			</ResponsiveContainer> </div> : null}
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			
			<TableData />
			</div>

		);
	}
}
const mapStateToProps = ( state ) => {
	console.log(state);
  return {
	apiData: state.apiReducer.data
  }
};



export default connect(mapStateToProps, { generateCryptoData })(CryptoChart);
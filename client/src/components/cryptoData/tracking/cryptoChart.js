import React, { Component } from 'react';
import Chart from 'chart.js';
import "./track.css";
import { connect } from "react-redux";
import { generateCryptoData } from "../../../actions/index.js";
import store from "../../../store/store.js";
import axios from "axios";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CanvasJSReact from "./canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CRYPTO_QUERY = gql`
	query {
	  bitcoinIntervalData {
	    timestamp
	    open
	    close
	    low
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
		timestamp: []
	}
}
	componentDidMount () {
		
		axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&currency=BTC&start=2019-07-18T00:00:00Z&end=2019-07-24T00:00:00Z").then((res) => {
			console.log(res.data);
			this.setState({
				data: res.data
			})
		}).catch((err) => {
			console.log(err);
		});
		return this.state.data.map((item) => {
			this.setState({
				timestamp: item.timestamp
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
	renderChartOne = () => {
		return (
			<Query query={CRYPTO_QUERY}>
			{
				({ loading, error, data }) => {
					if (loading) {
						return <h4>loading</h4>
					}
					if (error) {
						console.log(error);
					}
					if (data) {
						let ctx = document.getElementById('myChart').getContext('2d');
							let myChart = new Chart(ctx, {
						    type: 'line',
						    data: {
						        labels: [data.bitcoinIntervalData.map((item) => {
						        	return item.timestamp
						        })],
						        datasets: [{
						            label: 'Calories burned in last 7 days',
						            data: [data.bitcoinIntervalData.map((item) => {
						        	return item.high
						        })],
						            backgroundColor: [
						                'rgba(255, 99, 132, 0.2)',
						                'rgba(54, 162, 235, 0.2)',
						                'rgba(255, 206, 86, 0.2)',
						                'rgba(75, 192, 192, 0.2)',
						                'rgba(153, 102, 255, 0.2)',
						                'rgba(255, 159, 64, 0.2)'
						            ],
						            borderColor: [
						                'rgba(255, 99, 132, 1)',
						                'rgba(54, 162, 235, 1)',
						                'rgba(255, 206, 86, 1)',
						                'rgba(75, 192, 192, 1)',
						                'rgba(153, 102, 255, 1)',
						                'rgba(255, 159, 64, 1)'
						            ],
						            borderWidth: 1
						        }]
						    },
						    options: {
						        responsive: true,
						        maintainAspectRatio: false
						    }
						});
					}
					return null
					// return (
					// 	<React.Fragment>
					// 		<ul className="list_currencies">
					// 		{
					// 			data.data.map((item, index) => {
					// 				return <TableResults key={index} data={item} />
					// 			})
					// 		}
					// 		</ul>
					// 	</React.Fragment>
					// );
				}
			}
		</Query>
	);
	};

	render() {
		let newArr = [];
		let count = 0;
		let result = this.state.data.map((item) => {
			var date = new Date(item.timestamp);
			// Hours part from the timestamp
			var day = date.getDate();

			return { x: date, y: Number(item.high) };
		})

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light3", // "light1", "dark1", "dark2"
			title:{
				text: "Bitcoin Hourly Fluxuation"
			},
			axisY: {
				title: "Bounce Rate",
				includeZero: false,
				suffix: " USD"
			},
			axisX: {
				title: "Dates",
				prefix: `${this.state.timestamp}`
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: result
			}]
		}
	return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);
	}
}
const mapStateToProps = ( state ) => {
  return {
	apiData: state.apiReducer.data
  }
};



export default connect(mapStateToProps, { generateCryptoData })(CryptoChart);
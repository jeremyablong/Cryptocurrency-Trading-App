import React, { Component } from 'react';
import Chart from 'chart.js';
import "./track.css";
import { connect } from "react-redux";
import { generateCryptoData } from "../../../actions/index.js";
import store from "../../../store/store.js";
import axios from "axios";

class CryptoChart extends Component {
constructor () {
	super();

	this.state = {
		data: [],
		bitcoinData: []
	}
}
	componentDidMount () {

		axios.get("https://api.nomics.com/v1/currencies/ticker?key=561df32fa25fd3d93ae7064e0da5c8a2&ids=BTC,ETH,XRP&interval=1d, 7d, 30d").then((res) => {
			console.log(res.data);
			this.setState({
				data: res.data,
			})
		}).catch((err) => {
			console.log(err);
		})

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ 1, 5, 3, 5 ,7 ,8 ,4 ],
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
	renderCurrencies = () => {
		const { data } = this.state;
		return data.map((item, index) => {
			console.log(item);
			return (
				<div key={index} className="col-md-4">
					<div className="card crypto_card" style={{ width: "100%" }}>
						<img className="card-img-top" src={require("../../../images/102.jpg")} alt="Card image cap"/>
						  <div className="card-body crypto_container">
						    <h5 className="card-title"><span className="turn_red">{item.currency}</span> - Current Price = {Math.round(item.price * 100) / 100}</h5>
						    <p className="card-text">{item.name}</p>
						  	<p className="text-left"><span className="turn_red">All Time High</span> - {Math.round(item.high * 100) / 100}</p>
						    <p className="text-left"><span className="turn_red">Date of occurance</span> - {item.high_timestamp}</p>
						    <p className="text-left"><span className="turn_red">Circulating Supply</span> - {item.circulating_supply} coins</p>
						    <a onClick={this.conditionallyRenderCoinInfo} href="/" className="btn btn-primary">View More Details</a>
						  </div>
					</div>
				</div>
			);
		})
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12 mx-auto">
						<button style={{ margin: "13px 0px 0px 13px" }} onClick={this.updateReRenderChart} className="btn btn-info">Re-Render Chart</button>
					</div>
				</div>
			<div>
			<div>
				<canvas id="myChart" width="400" height="400"></canvas>
			
			</div>

			<div className="container-fluid api_display">
				<div className="row">
					{this.renderCurrencies()}
				</div>
			</div>
			</div>
			
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
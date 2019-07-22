import React, { Component } from 'react';
import Navigation from "../../universal/navbar.js";
import CryptoChart from "./cryptoChart.js";


class DietTracking extends Component {
	render() {
		return (
		<div>
			<Navigation />
			<CryptoChart />
		</div>
		);
	}
}
export default DietTracking;
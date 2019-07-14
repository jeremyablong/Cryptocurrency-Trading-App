import React, { Component } from 'react';
import Navigation from "../../universal/navbar.js";
import DietChart from "./dietChart.js";


class DietTracking extends Component {
	render() {
		return (
		<div>
			<Navigation />
			<DietChart />
		</div>
		);
	}
}
export default DietTracking;
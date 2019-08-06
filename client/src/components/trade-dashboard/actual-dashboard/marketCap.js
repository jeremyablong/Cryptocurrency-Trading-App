import React, { Component } from 'react';
import SvgDashboard from "./svg-dashboard/svgs.js";

class MarketCap extends Component {
constructor () {
	super();

	this.state = {
		data: []
	}
}
	render() {
		return (
			<div className="crypt-dark">
				<SvgDashboard />
			</div>
		);
	}
}
export default MarketCap;
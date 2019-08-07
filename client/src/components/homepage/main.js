import React, { Component } from 'react';
import Navigation from "../universal/navbar.js";
import LandingPage from "./landing/landing-page.js";
import OfficialLanding from "./landing/official-landing.js";
import Exchange from "../trade-dashboard/actual-dashboard/exchange.js";
import MarketCap from "../trade-dashboard/actual-dashboard/marketCap.js";

class HomepageMain extends Component {
	render() {
		return (
			<div>
				<Navigation />	
				<LandingPage />
				<Exchange />
				<MarketCap />
			</div>
		);
	}
}
export default HomepageMain;
import React, { Component } from 'react';
import Navigation from "../universal/navbar.js";
import LandingPage from "./landing/landing-page.js";
import OfficialLanding from "./landing/official-landing.js";
import TradingDashboard from "../trade-dashboard/dashboard/main.js";


class HomepageMain extends Component {
	render() {
		return (
			<div>
				<Navigation />	
				<LandingPage />
				<OfficialLanding />
				
			</div>
		);
	}
}
export default HomepageMain;
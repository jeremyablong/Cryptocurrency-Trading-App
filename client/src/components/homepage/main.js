import React, { Component } from 'react';
import Navigation from "../universal/navbar.js";
import LandingPage from "./landing/landing-page.js";

class HomepageMain extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<LandingPage />
			</div>
		);
	}
}
export default HomepageMain;
import React, { Component } from 'react';
import Navigation from "../universal/navbar.js";
import Slide from "./slider.js";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Slide />
			</div>
		);
	}
}
export default LandingPage;
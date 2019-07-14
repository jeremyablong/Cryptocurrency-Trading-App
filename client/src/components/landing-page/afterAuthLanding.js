import React, { Component } from 'react';
import Navigation from "../universal/navbar.js";
import HomeExercise from "./fitnessHome.js";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<HomeExercise />
			</div>
		);
	}
}
export default LandingPage;
import React, { Component } from 'react';
import Navigation from "../universal/navbar.js";
import Login from "./login.js";

class Homepage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Login />
			</div>
		);
	}
}
export default Homepage;
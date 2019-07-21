import React, { Component } from 'react';
import Navigation from "../../../../universal/navbar.js";
import { Link } from "react-router-dom";

class GeneralHealthHome extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Link to="/health/create">
					<button className="btn btn-outline-info btn_float_right">Create a thread</button>
				</Link>
				<h1 className="text-center"> General Health Data Displayed</h1>
			</div>
		);
	}
}
export default GeneralHealthHome;
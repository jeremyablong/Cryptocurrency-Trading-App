import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addPage } from "../../../actions/index.js";


class Icons extends Component {
	render() {
		return (
		<div className="background_white">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center">Get started in a few minutes</h2>
						<p className="text-center">Coinbase supports a variety of the most popular digital currencies.</p>
					</div>
				</div>
				{!localStorage.getItem("JWTToken") ? <div className="row">
					<div className="col-md-12">
					<Link to="/signup/initital">
						<button className="btn btn-info" style={{ width: "100%" }}>SIGN UP TODAY!</button>
					</Link>
					</div>
				</div> : null}
				
			</div>
		</div>
		);
	}
}
export default connect(null, { addPage })(Icons);
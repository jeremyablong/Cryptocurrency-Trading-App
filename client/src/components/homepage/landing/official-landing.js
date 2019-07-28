import React, { Component } from 'react';
import TableData from "../../api-results-display/table/table.js";
import "../homepage.css";
import Icons from "./icons.js";

class OfficialLanding extends Component {
	render() {
		return (
		<div className="background_three"> 
	
			<div className="container">
				<div className="row">
					<div className="col-md-12" style={{ paddingTop: "20px" }}>
						<h2 className="text-center">Create your cryptocurrency portfolio today</h2>
						<p className="text-center">Coinbase has a variety of features that make it the best place to start trading</p>
					</div>
				</div>
				<div className="row">
				<div className="col-md-3 icon_con">
					<img src={require("../../../images/shield.png")} className="icon" alt=""/>
					<h5 className="text-left">Buy and sell popular digital currencies, keep track of them in the one place.</h5>
				</div>
				<div className="col-md-3 icon_con">
					<img src={require("../../../images/policy.png")} className="icon" alt=""/>
					<h5 className="text-left">Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</h5>
				</div>
				<div className="col-md-3 icon_con">
					<img src={require("../../../images/locked.png")} className="icon" alt=""/>
					<h5 className="text-left">For added security, store your funds in a vault with time delayed withdrawals.</h5>
				</div>
				<div className="col-md-3 icon_con">
					<img src={require("../../../images/social-media.png")} className="icon" alt=""/>
					<h5 className="text-left">Invest in cryptocurrency with ease of mind with various security backup features and identity prote.</h5>
				</div>
					<div className="col-md-6 mx-auto" style={{ marginTop: "40px" }}>
						<img src={require("../../../images/screenone.png")} className="graph" alt=""/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12" style={{ paddingTop: "20px" }}>
						<h2 className="text-center">The most trusted cryptocurrency platform</h2>
						<p className="text-center">Here are a few reasons why you should choose Coinbase</p>
					</div>
				</div>
				<div className="row" style={{ paddingBottom: "30px" }}>
					<div className="col-md-3 icon_con">
						<img src={require("../../../images/locked.png")} className="icon" alt=""/>
						<h5 className="text-left bold_me">Buy and sell popular digital currencies, keep track of them in the one place.</h5>
					</div>
					<div className="col-md-3 icon_con">
						<img src={require("../../../images/safebox.png")} className="icon" alt=""/>
						<h5 className="text-left bold_me">Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</h5>
					</div>
					<div className="col-md-3 icon_con">
						<img src={require("../../../images/online-store.png")} className="icon" alt=""/>
						<h5 className="text-left bold_me">For added security, store your funds in a vault with time delayed withdrawals.</h5>
					</div>
					<div className="col-md-3 icon_con">
						<img src={require("../../../images/bank.png")} className="icon" alt=""/>
						<h5 className="text-left bold_me">Invest in cryptocurrency with ease of mind with various security backup features and identity prote.</h5>
					</div>		
				</div>
			</div>
			<Icons />
		</div>
		);
	}
}
export default OfficialLanding;
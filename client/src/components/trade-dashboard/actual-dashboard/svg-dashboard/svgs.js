import React, { Component } from 'react';
import axios from "axios";

class SvgDashboard extends Component {
constructor () {
	super();

	this.state = {
		data: []
	}
}
	componentDidMount() {
			const proxyurl = "https://cors-anywhere.herokuapp.com/";

			axios.get(proxyurl + "https://api.nomics.com/v1/currencies/ticker?key=561df32fa25fd3d93ae7064e0da5c8a2&ids=BTC,ETH,XRP,BTCC,LTC,USDT,XMC,TRX,NEO,ETHC,ZC,NEM,ADA,DOGE,ZIL,BITE,BSV,EOS,BCH,ZEC,XEM&interval=1d,30d").then((res) => {
				this.setState({
					data: res.data
				})
			}).catch((err) => {
				console.log(err);
			})
	}
	render() {
		console.log(this.state.data)
		return (
	<div className="container">
		<div className="row sm-gutters">
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="crypt-fulldiv-linechart mt-4">
					<h4 className="coinname"><img src={require("./images/coins/btc.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Bitcoin</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
	      			data-bg = "fdddb7"
	      			data-border = "f8a036">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "BTC") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      			
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/eth.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Ethrium</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
	      			data-bg = "bfe9cf"
	      			data-border = "49c279">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "ETH") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      			
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/xrp.png")} width="20" className="crypt-market-cap-logo" alt="logo"/>  XRP</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[55,69,41,61,56,54,44,50,60]" 
	      			data-bg = "c7c0ea"
	      			data-border = "b2a8e2">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "XRP") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      			
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/btcc.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> BTCC</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[15,49,41,61,76,84,44,60,78]" 
	      			data-bg = "fcc6bf"
	      			data-border = "fa9f93">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "BTCC") {
		      				for (let i in item) {
		      					newArr.push(item[i].price_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.price} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET PRICE</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/ltc.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> LTC</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[45,37,41,41,66,54,44,60,78]" 
	      			data-bg = "b8eefd"
	      			data-border = "94e4fb">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "LTC") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/tether.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Tether</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[55,47,41,66,79,54,23,60,78]" 
	      			data-bg = "fdc0de"
	      			data-border = "fcb2d7">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "USDT") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      			
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/monero.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Monero</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[45,37,41,41,66,54,44,60,78]" 
	      			data-bg = "dca875"
	      			data-border = "dca875">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "XMC") {
		      				for (let i in item) {
		      					newArr.push(item[i].price_change_pct)
		      				}
		      			
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.price} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET PRICE</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/tron.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Tron</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
	      			data-bg = "bfe9cf"
	      			data-border = "49c279">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "TRX") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      			
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/neo.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> NEO</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
	      			data-bg = "fdddb7"
	      			data-border = "f8a036">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "NEO") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/ethc.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> BitEthereum</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
	      			data-bg = "bfe9cf"
	      			data-border = "49c279">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "BITE") {
		      				for (let i in item) {
		      					newArr.push(item[i].price_change_pct)
		      				}
		      				console.log(newArr)
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.price} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET PRICE</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/zc.png")} width="20" className="crypt-market-cap-logo" alt="logo"/>  Zcash</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[55,69,41,61,56,54,44,50,60]" 
	      			data-bg = "c7c0ea"
	      			data-border = "b2a8e2">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "ZEC") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/nem.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> NEM</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[15,49,41,61,76,84,44,60,78]" 
	      			data-bg = "fcc6bf"
	      			data-border = "fa9f93">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "XEM") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/cardano.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Cardano</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[45,37,41,41,66,54,44,60,78]" 
	      			data-bg = "b8eefd"
	      			data-border = "94e4fb">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "ADA") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/doge.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Doge</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[55,47,41,66,79,54,23,60,78]" 
	      			data-bg = "fdc0de"
	      			data-border = "fcb2d7">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "DOGE") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/zil.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Ziliqua</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[45,37,41,41,66,54,44,60,78]" 
	      			data-bg = "dca875"
	      			data-border = "dca875">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "ZIL") {
		      				for (let i in item) {
		      					newArr.push(item[i].market_cap_change_pct)
		      				}
		      				
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.market_cap} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET CAP</b></p>
		      	</div>
			</div>
		</div>
		<div className="col-md-6 col-lg-4 col-xl-3">
			<div className="crypt-fulldiv-linechart mt-4">
				<h4 className="coinname"><img src={require("./images/coins/bite.png")} width="20" className="crypt-market-cap-logo" alt="logo"/> Bitecoin</h4>
				<div
	      			className ="crypt-individual-marketcap"
	      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
	      			data-bg = "bfe9cf"
	      			data-border = "49c279">
		      		<canvas></canvas>
		      	</div>
		      	<div className="coin-meta-data text-center">
		      		<h4>{this.state.data.map((item, index) => {
		      			let newArr = [];
		      			if (item.currency === "BITE") {
		      				for (let i in item) {
		      					newArr.push(item[i].price_change_pct)
		      				}
		      				return (
		      				<React.Fragment key={index}>
								{newArr[newArr.length - 1] > 0 ? <div className="crypt-up"> {newArr[newArr.length - 1]} <img src={require("./images/up-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div> : <div className="crypt-down"> {newArr[newArr.length - 1]} <img src={require("./images/download-arrow.svg")} width="15" className="crypt-market-cap-logo" alt="logo"/></div>}
								<strong> {item.price} </strong>
							</React.Fragment>
		      				);
							
		      			}
		      		})}</h4>
		      		<p><b>MARKET PRICE</b></p>
		      	</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}
export default SvgDashboard;
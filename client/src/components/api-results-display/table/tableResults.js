import React, { Component } from 'react';
import "./table-display.css";

class TableResults extends Component {
	render() {
		window.scrollTo(0, 0)
		const { currency, id, price, price_date, symbol, circulating_supply, max_supply, name, logo_url, market_cap, rank, high,  high_timestamp } = this.props.data;
		return (
			<div className="row">
			
				<li className="list_item"> 
				<h4 className="text-center main">{currency}</h4>
				<div className="row">
					<div className="col-md-2">
						<img src={logo_url} className="img_logo" alt="Logo"/>
					</div>
					<div className="col-md-4">
						<p className="text-left">Currency Name: <span className="turn_blue">{name}</span> </p>

						<p className="text-left"> Price: <span className="turn_red">${Math.round(price * 100) / 100} USD</span> </p>
						<p className="text-left"> Last quoted price data: <span className="turn_blue">{price_date}</span> </p>
					</div>
					<div className="col-md-3">
						<p className="text-left"> Ranking: <span className="turn_blue">#{rank}</span> </p>
						<p className="text-left"> Highest Value: <span className="turn_blue">{Math.round(high * 100) / 100} USD</span> </p>
						<p className="text-left"> Highest Value Date: <span className="turn_blue">{high_timestamp}</span> </p>

					</div>
					<div className="col-md-3">
						<p className="text-left"> Market Cap: <span className="turn_blue">{market_cap}</span> </p>
						<p className="text-left"> Circulating Supply: <span className="turn_blue"> {circulating_supply} </span> </p>
						<p className="text-left"> ID Of Currency: <span className="turn_blue">{id}</span> </p>
					</div>
					</div>
				</li>
			</div>
		);
	}
}
export default TableResults;
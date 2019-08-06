import React, { Component } from 'react';
import axios from "axios";
import socketIOClient from "socket.io-client";
import BA from "./b-a.js";
import "../../css/style.css";


class AsksBids extends Component {
constructor () {
	super();

    this.state = { 
    	open: false,
    	data: []
    };

    this.socket = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');
}
	componentDidMount() {
	    this.socket.onopen = () => this.socket.send(JSON.stringify({
		  "type": "hello",
		  "apikey": "8CA1D81F-B5A8-49FE-87B3-5630DE1A7A96",
		  "heartbeat": true,
		  "subscribe_data_type": ["book"],
		  "subscribe_filter_asset_id": ["BTC", "ETH"],
		  "time_exchange": "2023-08-05T03:25:00.0000000Z",
		  "subscribe_update_limit_ms_quote": 10000,
		  "subscribe_filter_symbol_id": [
		    "GEMINI_SPOT_BTC_USD"
		  ]
		}))
	    this.socket.onmessage = ({ data }) => {
	    	// Send to Everyone
			setTimeout(function() {
			  console.log(JSON.parse(data))
			}, 5000 );

	    	this.setState({
	    		data: [JSON.parse(data)]
	    	})
	    }
	}
	render() {
		return (
		<React.Fragment>
			<div className="table_body">
			
			{this.state.data.map((item, index) => {
				return <BA data={item} key={index}/>
			})}
			</div>
		</React.Fragment>
		);
	}
}
export default AsksBids;
import React, { Component } from 'react';

class BA extends Component {
constructor (props) {
	super(props);
}
	render() {
		console.log(this.props.data);
		return (
			<td>
	            <tr className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right">{[this.props.data].map((item) => {
					if (item.time_exchange) {
						const newDate = new Date(item.time_exchange);
						return newDate.toTimeString();
					}
				})}</span></tr>
	        {/* item bids */}
				<tr className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right">{[this.props.data].map((item) => {
					for (let i in item.bids) {
						return (
							<React.Fragment>
								<span className="d-block crypt-up"> {item.bids[i].price ? "Bid Price: " + item.bids[i].price : "No Bids Provided."}</span>
								<br/>
								 <b className="crypt-up">Size: {item.bids[i].size ? item.bids[i].size : "No Size Provided."}</b> 
							</React.Fragment>
						);
					}
				})}</span></tr>
			{/* item asks */}
				<tr className="align-middle">{[this.props.data].map((item) => {
					for (let i in item.asks) {
						return (
						<React.Fragment>
							<span className="d-block crypt-down"> {item.asks[i].price ? "Ask Price: " + item.asks[i].price : "No Asks Provided."}</span>
							<br/>
							 <b className="crypt-up">Size: {item.asks[i].size ? item.asks[i].size : "No Size Provided."}</b> 
						</React.Fragment>
						);
					}
				})}</tr>
	        </td>
	    );
	}
}
export default BA;
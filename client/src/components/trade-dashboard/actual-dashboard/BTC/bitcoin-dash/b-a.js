import React, { Component } from 'react';

class BA extends Component {
constructor (props) {
	super(props);
}
	render() {
		return (
			<div>
	            <div className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right">{[this.props.data].map((item, index) => {
					if (item.time_exchange) {
						const newDate = new Date(item.time_exchange);
						return <p style={{ margin: "0px 0px -20px 0px" }} key={index} className="text-white right">{newDate.toTimeString()} </p>
					}
				})}</span></div>
	        {/* item bids */}
				<div className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right">{[this.props.data].map((item, index) => {
					for (let i in item.bids) {
						return (
							<React.Fragment key={index}>
								<p className="d-block crypt-up right"> {item.bids[i].price ? "Bid Price: " + item.bids[i].price : "No Bids Provided."}</p>
								
								 <p className="crypt-up right">Size: {item.bids[i].size ? item.bids[i].size : "No Size Provided."}</p> 
							</React.Fragment>
						);
					}
				})}</span></div>
			{/* item asks */}
				<div className="align-middle">{[this.props.data].map((item, index) => {
					for (let i in item.asks) {
						return (
						<React.Fragment key={index} >
							<p className="d-block crypt-down right"> {item.asks[i].price ? "Ask Price: " + item.asks[i].price : "No Asks Provided."}</p>
							
							 <p className="crypt-up right">Size: {item.asks[i].size ? item.asks[i].size : "No Size Provided."}</p> 
						</React.Fragment>
						);
					}
				})}</div>
	        </div>
	    );
	}
}
export default BA;
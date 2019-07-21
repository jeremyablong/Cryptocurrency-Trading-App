import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./home.css";

class Forums extends Component {
	render() {
		return (
			<div className="background_home">
				<div className="container">
					<div className="row">
					
						<div className="col-md-5 health_forum">
						<Link to="/health/health">
							<h4 className="text-left"><i className="fas fa-heartbeat fa-2x"></i>General Health Forum</h4>
							<p className="text-left"> We welcome you to participate and join our growing health community to discuss your health and body wellness... </p>
							</Link>
						</div>
					
						<div className="col-md-5 health_forum">
						<Link to="/health/weight">
							<h4 className="text-left"><i className="fas fa-dumbbell fa-2x"></i> Weight Training Forum</h4>
							<p className="text-left"> We welcome you to participate and join our growing weight training community to discuss your goals and accomplishments regarding weight training... </p>
						</Link>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 health_forum">
						<Link to="/health/cardio">
							<h4 className="text-left"><i className="fas fa-running fa-2x"></i> Jogging And Cardio Forum</h4>
							<p className="text-left"> We welcome you to participate and join our growing health community to discuss all of your cardio and running needs... </p>
						</Link>
						</div>
						<div className="col-md-5 health_forum">
						<Link to="/health/weightloss">
							<h4 className="text-left"><i className="fas fa-weight fa-2x"></i> Weight Loss Forum</h4>
							<p className="text-left"> We welcome you to participate and join our growing health training community to discuss your goals and accomplishments regarding weight loss and fat burning... </p>
						</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Forums;
import React, { Component } from 'react';
import "./home.css";
import { loginUser, auth } from "../../actions/index.js";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router";
import  { Link } from "react-router-dom";

class Login extends Component {
constructor (props) {
	super(props);


	this.state = {
		loginEmail: "",
		loginPassword: ""
	}
}
	handleLoginSubmit = (e) => {
		e.preventDefault();

		const config = { 
			email: this.state.loginEmail,
			password: this.state.loginPassword
		}

		this.props.loginUser(config);

		this.props.auth(config);

		axios.post("/auth/login", config).then((res) => {
			if (res.data.user === "Email found, account verified..") {
				this.props.history.push("/homepage");
				console.log("EMAIL FOUND.");
			} else {
				console.log("EMAIL NOT FOUND.")
			}
		}).catch((err) => {
			console.log(err);
		})

		console.log("Login clicked.");
	};
	render() {
		return (
		<div className="background">
			<div className="container signup_container">
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Sign In</h3>
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									<input onChange={(e) => {
										this.setState({
											loginEmail: e.target.value
										})
									}} type="text" className="form-control" placeholder="email" />
									
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									<input onChange={(e) => {
										this.setState({
											loginPassword: e.target.value
										})
									}} type="password" className="form-control" placeholder="password"/>
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox"/>Remember Me
								</div>
								<div className="form-group">
									<button onClick={this.handleLoginSubmit} type="submit" className="btn float-right login_btn"> LOGIN </button>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<Link to="/" className="d-flex justify-content-center links">
								Don't have an account?<a href="#">Sign Up</a>
							</Link>
							<div className="d-flex justify-content-center">
								<a href="#">Forgot your password?</a>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
		
	}
}
export default withRouter(connect(mapStateToProps, { loginUser, auth })(Login));
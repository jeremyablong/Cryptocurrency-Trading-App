import React, { Component } from 'react';
import "./register.css";
import axios from "axios";
import { loginUser, auth } from "../../../actions/index.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../../store/store.js";

class Profile extends Component {
constructor () {
	super();

	this.state = {
		loginEmail: "",
		loginPassword: "",
		signedIn: false
	}
}
	handleLogin = (e) => {

		e.preventDefault();

		const config = { 
			email: this.state.loginEmail.toLowerCase(),
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
		console.log(store.getState().authorize.data);

		setTimeout(() => {
			this.forceUpdate();
		}, 300);
	};

	renderIfSignedIn = () => {	
		if (store.getState().authorize.data === "Email found, account verified..") {
		return (
			<div className="profile_container">
				<div class="container">
		            <form class="form-horizontal" role="form">
		                <h2>Registration</h2>
		                <div class="form-group">
		                    <label for="firstName" class="col-sm-3 control-label">First Name</label>
		                    <div class="col-sm-9">
		                        <input type="text" id="firstName" placeholder="First Name" class="form-control" autofocus/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label for="lastName" class="col-sm-3 control-label">Last Name</label>
		                    <div class="col-sm-9">
		                        <input type="text" id="lastName" placeholder="Last Name" class="form-control" autofocus/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label for="email" class="col-sm-3 control-label">Email* </label>
		                    <div class="col-sm-9">
		                        <input type="email" id="email" placeholder="Email" class="form-control" name= "email"/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label for="password" class="col-sm-3 control-label">Password*</label>
		                    <div class="col-sm-9">
		                        <input type="password" id="password" placeholder="Password" class="form-control"/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label for="password" class="col-sm-3 control-label">Confirm Password*</label>
		                    <div class="col-sm-9">
		                        <input type="password" id="password" placeholder="Password" class="form-control"/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label for="birthDate" class="col-sm-3 control-label">Date of Birth*</label>
		                    <div class="col-sm-9">
		                        <input type="date" id="birthDate" class="form-control"/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label for="phoneNumber" class="col-sm-3 control-label">Phone number </label>
		                    <div class="col-sm-9">
		                        <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" class="form-control"/>
		                        <span class="help-block">Your phone number won't be disclosed anywhere </span>
		                    </div>
		                </div>
		                <div class="form-group">
		                        <label for="Height" class="col-sm-3 control-label">Height* </label>
		                    <div class="col-sm-9">
		                        <input type="number" id="height" placeholder="Please write your height in centimetres" class="form-control"/>
		                    </div>
		                </div>
		                 <div class="form-group">
		                        <label for="weight" class="col-sm-3 control-label">Weight* </label>
		                    <div class="col-sm-9">
		                        <input type="number" id="weight" placeholder="Please write your weight in kilograms" class="form-control"/>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label class="control-label col-sm-3">Gender</label>
		                    <div class="col-sm-6">
		                        <div class="row">
		                            <div class="col-sm-4">
		                                <label class="radio-inline">
		                                    <input type="radio" id="femaleRadio" value="Female"/>Female
		                                </label>
		                            </div>
		                            <div class="col-sm-4">
		                                <label class="radio-inline">
		                                    <input type="radio" id="maleRadio" value="Male"/>Male
		                                </label>
		                            </div>
		                        </div>
		                    </div>
		                </div> 
		                <div class="form-group">
		                    <div class="col-sm-9 col-sm-offset-3">
		                        <span class="help-block">*Required fields</span>
		                    </div>
		                </div>
		                <button type="submit" class="btn btn-primary btn-block">Register</button>
		            	</form> 
		        	</div> 
				</div>
		);			
		} else {
			return (
				<div className="background_two">
					<div className="container signup_container">
						<div className="d-flex justify-content-center h-100">
							<div className="card">
								<div className="card-header">
									<h3>Sign In To Create A Profile</h3>
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
											<button onClick={this.handleLogin} type="submit" className="btn float-right login_btn"> LOGIN </button>
										</div>
									</form>
								</div>
								<div className="card-footer">
									<Link to="/" className="d-flex justify-content-center links">
										Don't have an account?Sign Up
									</Link>
									{/*<div className="d-flex justify-content-center">
										<a href="#">Forgot your password?</a>
									</div>*/}
								</div>
							</div>
						</div>
					</div>	
				</div>
			);
		}
	};
	render() {
		return (
		<div>

			{this.renderIfSignedIn()}
			
		</div>
		);
	}
}
export default connect(null,  { loginUser, auth })(Profile);
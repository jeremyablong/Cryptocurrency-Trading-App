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
			if (store.getState().authorize.data === "Email NOT found, account couldn't be authenticated." || store.getState().authorize.data === "EMAIL NOT FOUND.") {
                alert("Please enter valid credentials.")
            }
			this.forceUpdate();
		}, 300);
	};

	renderIfSignedIn = () => {	
		if (store.getState().authorize.data === "Email found, account verified..") {
		return (
			<div className="profile_container">
				<div className="container">
		            <form className="form-horizontal" role="form">
		                <h2>Register</h2>
		                <div className="form-group">
		                    <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
		                    <div className="col-sm-9">
		                        <input type="text" id="firstName" placeholder="First Name" className="form-control" autoFocus/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
		                    <div className="col-sm-9">
		                        <input type="text" id="lastName" placeholder="Last Name" className="form-control" autoFocus/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
		                    <div className="col-sm-9">
		                        <input type="email" id="email" placeholder="Email" className="form-control" name= "email"/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
		                    <div className="col-sm-9">
		                        <input type="password" id="password" placeholder="Password" className="form-control"/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label>
		                    <div className="col-sm-9">
		                        <input type="password" id="password" placeholder="Password" className="form-control"/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
		                    <div className="col-sm-9">
		                        <input type="date" id="birthDate" className="form-control"/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number </label>
		                    <div className="col-sm-9">
		                        <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control"/>
		                        <span className="help-block">Your phone number won't be disclosed anywhere </span>
		                    </div>
		                </div>
		                <div className="form-group">
		                        <label htmlFor="Height" className="col-sm-3 control-label">Height* </label>
		                    <div className="col-sm-9">
		                        <input type="number" id="height" placeholder="Please write your height in centimetres" className="form-control"/>
		                    </div>
		                </div>
		                 <div className="form-group">
		                        <label htmlFor="weight" className="col-sm-3 control-label">Weight* </label>
		                    <div className="col-sm-9">
		                        <input type="number" id="weight" placeholder="Please write your weight in kilograms" className="form-control"/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label className="control-label col-sm-3">Gender</label>
		                    <div className="col-sm-6">
		                        <div className="row">
		                            <div className="col-sm-4">
		                                <label className="radio-inline">
		                                    <input type="radio" id="femaleRadio" value="Female"/>Female
		                                </label>
		                            </div>
		                            <div className="col-sm-4">
		                                <label className="radio-inline">
		                                    <input type="radio" id="maleRadio" value="Male"/>Male
		                                </label>
		                            </div>
		                        </div>
		                    </div>
		                </div> 
		                <div className="form-group">
		                    <div className="col-sm-9 col-sm-offset-3">
		                        <span className="help-block">*Required fields</span>
		                    </div>
		                </div>
		                <button type="submit" className="btn btn-primary btn-block">Register</button>
		            	</form> 
		        	</div> 
				</div>
		);			
		} else {
			return (
				<div className="background_two">
					<div className="container signup_container">
						<div className="d-flex justify-content-center h-100">
							<div className="card card_overhaul">
								<div className="card-header">
									<h3 style={{ paddingTop: "30px"}}>Sign In To Create A Profile</h3>
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
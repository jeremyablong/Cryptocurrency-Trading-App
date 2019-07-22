import React, { Component } from 'react';
import "../homepage.css";
import { registerUser, loginUser, auth } from "../../../actions/index.js";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import store from "../../../store/store.js";

class LandingPage extends Component {
constructor () {
	super();

	this.state = {
		firstName: "",
		lastName: "",
		password: "",
		email: "",
		number: "",
		secret: "",
		hidden: true,
		loginEmail: "",
		loginPassword: "",
		emails: [],
		show: false,
        sent: false,
        registered: false
	}
}

	componentDidMount () {
		axios.get("/api/profile", {
			"Access-Control-Allow-Origin": "*"
		}).then((res) => {
			this.setState({
				emails: res.data
			});
		}).catch((err) => {
			console.log(err);
		})
	}

	handleRegisterSubmit = (e) => {
		e.preventDefault();
		
		const { firstName, lastName, password, number, secret } = this.state;
        const email = this.state.email.toLowerCase()
		axios.post("/api/profile", {
			firstName,
			lastName,
			password,
			email,
			number,
			secret,
			date: Math.floor(Date.now() /1000),
		}).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		});

		if (firstName && lastName && password && email && number && secret) {
            console.log("Register Clicked / Submitted.");
            this.props.registerUser(this.state);
            this.setState({
                registered: true
            })
                    } else {
			alert("Please complete all of the form fields.")
		}
        // redirect if successful signup
		return this.state.emails.forEach((item) => {
			if (email === item.email) {
				this.setState({
					show: true,
                    firstName: "",
                    lastName: "",
                    password: "",
                    email: "",
                    number: "",
                    secret: "",
                    loginPassword: ""
				});
			}
		});
	};
	togglePassword = () => {
		this.setState({
			hidden: !this.state.hidden
		});
	};
	handleLoginSubmit = (e) => {
		e.preventDefault();
		this.props.loginUser({ 
			email: this.state.loginEmail.toLowerCase(),
			password: this.state.loginPassword
		});
        const config = { 
            email: this.state.loginEmail.toLowerCase(),
            password: this.state.loginPassword
        }

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
		setTimeout(() => {
            if (store.getState().authorize.data === "Email NOT found, account couldn't be authenticated." || store.getState().authorize.data === "EMAIL NOT FOUND.") {
                alert("Please enter valid credentials.")
            }
        }, 300)
		console.log("Login clicked.")
	};
	render() {
		return (
            <div className="container-fluid register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from accessing immediate guarenteed loans!</p>
                        
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">REGISTER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">LOGIN</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Start bidding on cryptocurrency and forex today! Don't miss out and signup today.</h3>
                                <form action="/" method="POST" onSubmit={this.handleRegisterSubmit}  className="row register-form">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		firstName: e.target.value
                                            	})
                                            }} type="text" className="form-control" placeholder="First Name *" value={this.state.registered ? "You're registered" : this.state.firstName} />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		lastName: e.target.value
                                            	})
                                            }} type="text" className="form-control" placeholder="Last Name *" value={this.state.registered ? "You're registered" : this.state.lastName} />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		password: e.target.value
                                            	})
                                            }} type={this.state.hidden ? "password" : "text"} className="form-control" placeholder="Password *" value={this.state.registered ? "You're registered" : this.state.password} />
                                        </div>
                                        <h6 onClick={this.togglePassword}> <i className="fas fa-eye"></i> Show Password </h6>
           {/*                             <div className="form-group">
                                            <div className="maxl">
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="male"  />
                                                    <span> Male </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="female"/>
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>*/}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		email: e.target.value,
                                            		show: false
                                            	})
                                            }} type="email" className="form-control" placeholder="Your Email *" value={this.state.registered ? "You're registered" : this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		number: e.target.value
                                            	})
                                            }} type="text" minLength="10" maxLength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *" value={this.state.registered ? "You're registered" : this.state.number} />
                                        </div>
                                       {/* <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden"   disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>*/}
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		secret: e.target.value
                                            	})
                                            }} type="text" className="form-control" placeholder="Select a secret phrase for account recovery *" value={this.state.registered ? "You're registered" : this.state.secret} />
                                        </div>

                                        <input type="submit" className="btnRegister"  value="Register"/>
                                <div className="row">
                                    <h6 className="text_red">{this.state.show ? "This email already exists, please login..." : null}</h6>
                                </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Login to access your health tracking account!</h3>
                                <form onSubmit={this.handleLoginSubmit} className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		loginEmail: e.target.value
                                            	})
                                            }} type="text" name="email" className="form-control" placeholder="Enter Your Email" value={this.state.loginFirstName} />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => {
                                            	this.setState({
                                            		loginPassword: e.target.value
                                            	})
                                            }} type={this.state.hidden ? "password" : "text"} name="password" className="form-control" placeholder="Enter Your Password" value={this.state.loginLastName} > 
												
                                            </input>
                                            <br />

                                            <h6 onClick={this.togglePassword}> <i className="fas fa-eye"></i> Show Password </h6>
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-6">
										<button className="btn btn-outline-info">SIGN-IN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
		);
	}
}

export default withRouter(connect(null, { registerUser, loginUser, auth })(LandingPage));

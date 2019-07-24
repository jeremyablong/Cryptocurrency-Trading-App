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

		setTimeout(() => {
			if (store.getState().authorize.data === "Email NOT found, account couldn't be authenticated." || store.getState().authorize.data === "EMAIL NOT FOUND.") {
                alert("Please enter valid credentials.")
            }
			this.forceUpdate();
		}, 300);
	};

	renderIfSignedIn = () => {	


		//////////////// CHANGE THIS TO CONDITIONALLY RENDER BEFORE DEPLOYMENT /////////////////////


		if (store.getState().authorize.data === "Email found, account verified..") {
		return (
			<h1> signed in</h1>
		);			
		} else {
			return (
				<h1> signed out</h1>
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
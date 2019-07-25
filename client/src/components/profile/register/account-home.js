import React, { Component } from 'react';
import Navigation from "../../universal/navbar.js";
import Profile from "./profile.js";

class ProfileRegister extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Profile />
			</div>
		);
	}
}
export default ProfileRegister;
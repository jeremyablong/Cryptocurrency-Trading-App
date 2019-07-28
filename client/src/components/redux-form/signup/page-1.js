import React, { Component } from 'react';
import "./redux-form.css";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import ReduxSignupPageTwo from "./page-2.js";
import axios from "axios";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class ReduxPageOneSignup extends Component {
constructor () {
	super();


	this.state = {
		hidden: false,
		page: 1
	}
}
	handleSubmitOne = (e) => {
		e.preventDefault();
		
		axios.post("/twostep/authenitcate").then((res) => {
			console.log(res)
		}).catch((err) => {
			console.log(err)
		})
		this.setState({
			page: 2
		})
		console.log("Submitted.")
	};
	prevPage = () => {
		this.setState({
			page: this.state.page + 1
		})
	};
	nextPage = () => {
		this.setState({
			page: this.state.page - 1
		})
	};
	wizardPageOne = () => {
		return (
		<div className="blue">
				<div className="container">
					<div className="row">
						<div className="col-md-12" style={{ paddingTop: "30px" }}>
							<h2 className="text-center text-white">Create Your Account</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
						<div className="container">
							<div className="row">
						      <div className="col-md-12 mx-auto contact_form_cont">
						        <div className="well well-sm form_container">
						          <form onSubmit={this.handleSubmitOne} className="form-horizontal" action="" method="post">
						          	<h3 className="text-center">Signup Today! (Part One)</h3>
									<div className="row">
										<div className="col-md-6">
										<label htmlFor="firstname">First Name</label>
											<Field placeholder="John" component="input" name="firstname" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
										</div>
										<div className="col-md-6">
										<label htmlFor="lastname">Last Name</label>
											<Field component="input" placeholder="Doe" name="lastname" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
										<label htmlFor="email">Email</label>
											<Field component="input" placeholder="Johndoe@gmail.com" name="email" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
										<label htmlFor="password">Password</label>
											<Field component="input" name="password" type={this.state.hidden ? "password" : "text"} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
											<h6 style={{ paddingTop: "6px" }} className="password__show" onClick={() => {
												this.setState({
													hidden: !this.state.hidden
												})
											}}> Check Password </h6>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
										<Field name="state" component="select" className="form-control">
											<option value="AL">Alabama</option>
											<option value="AK">Alaska</option>
											<option value="AZ">Arizona</option>
											<option value="AR">Arkansas</option>
											<option value="CA">California</option>
											<option value="CO">Colorado</option>
											<option value="CT">Connecticut</option>
											<option value="DE">Delaware</option>
											<option value="DC">District Of Columbia</option>
											<option value="FL">Florida</option>
											<option value="GA">Georgia</option>
											<option value="HI">Hawaii</option>
											<option value="ID">Idaho</option>
											<option value="IL">Illinois</option>
											<option value="IN">Indiana</option>
											<option value="IA">Iowa</option>
											<option value="KS">Kansas</option>
											<option value="KY">Kentucky</option>
											<option value="LA">Louisiana</option>
											<option value="ME">Maine</option>
											<option value="MD">Maryland</option>
											<option value="MA">Massachusetts</option>
											<option value="MI">Michigan</option>
											<option value="MN">Minnesota</option>
											<option value="MS">Mississippi</option>
											<option value="MO">Missouri</option>
											<option value="MT">Montana</option>
											<option value="NE">Nebraska</option>
											<option value="NV">Nevada</option>
											<option value="NH">New Hampshire</option>
											<option value="NJ">New Jersey</option>
											<option value="NM">New Mexico</option>
											<option value="NY">New York</option>
											<option value="NC">North Carolina</option>
											<option value="ND">North Dakota</option>
											<option value="OH">Ohio</option>
											<option value="OK">Oklahoma</option>
											<option value="OR">Oregon</option>
											<option value="PA">Pennsylvania</option>
											<option value="RI">Rhode Island</option>
											<option value="SC">South Carolina</option>
											<option value="SD">South Dakota</option>
											<option value="TN">Tennessee</option>
											<option value="TX">Texas</option>
											<option value="UT">Utah</option>
											<option value="VT">Vermont</option>
											<option value="VA">Virginia</option>
											<option value="WA">Washington</option>
											<option value="WV">West Virginia</option>
											<option value="WI">Wisconsin</option>
											<option value="WY">Wyoming</option>
										</Field>
										</div>
									</div>
									<div className="row" style={{ paddingTop: "20px" }}>
										<div className="col-md-12">
											<div className="checkbox">
											  <Field name="checkbox" component="input" type="checkbox" value="checkbox"/><label><strong> By continuing I certify that i am 18 years of age, and i agree to the User Agreement and Privacy Policy. </strong></label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<button style={{ width: "100%" }} className="btn btn-success">Submit Part One</button>
										</div>
									</div>
						          </form>
						        </div>
						      </div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	render() {
		const { page } = this.state;
		return (
		<div>
			{page === 1 ? this.wizardPageOne() : null}
			{page === 2 ? <ReduxSignupPageTwo /> : null}
			<button className="btn btn-danger" onClick={() => {
				this.setState({
					page: 1
				})
			}}>Back to page one</button>
		</div>
		);
	}
}
export default reduxForm({
  form: 'signup' // a unique identifier for this form
})(ReduxPageOneSignup)
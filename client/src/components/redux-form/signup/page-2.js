import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class ReduxSignupPageTwo extends Component {
constructor (props) {
	super(props);

	this.state = {
		hidden: false,
		page: 2
	}

}	
render() {
		console.log(this.props);
		return (
		<div className="blue_two">
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
						          <button style={{ marginTop: "20px" }} className="btn btn-danger">Back to page one</button>
						        </div>
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
}


export default ReduxSignupPageTwo;
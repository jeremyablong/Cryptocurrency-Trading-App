import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class ReduxSignupPageTwo extends Component {
	render() {
		return (
		<div className="blue">
				<div className="container">
					<div className="row">
						<div className="col-md-12" style={{ paddingTop: "30px" }}>
							<h2 className="text-center text-white">Verify your account</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
						<div className="container">
							<div className="row">
						      <div className="col-md-12 mx-auto contact_form_cont">
						        <div className="well well-sm form_container">
						          <form onSubmit={this.handleSubmitOne} className="form-horizontal" action="" method="post">
						          <h3 className="text-center">Please enter your verification number</h3>
						          	<Field placeholder="23834820" component="input" name="code" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
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
}


export default ReduxSignupPageTwo;
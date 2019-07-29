import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Footer from "../../universal/footer.js";
import { connect } from "react-redux";

class Validate extends Component {
constructor () {
  super();

  this.state = {
    hidden: true
  }
}
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div>
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
                            <form onSubmit={this.handleSubmit} className="form-horizontal" action="" method="post">
                              <h3 className="text-center">Signup Today!</h3>
                        <div className="row">
                          <div className="col-md-12">
                          <label htmlFor="activation">ACTIVATION KEY</label>
                            <Field required component="input" placeholder="Activation Key..." name="activation" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                          </div>
                        </div>
                       <div className="row">
                          <div className="col-md-12">
                          <label htmlFor="email">Account Email Address</label>
                            <Field required component="input" placeholder="Email..." name="email" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                          </div>
                        </div>
                    <div className="row">
                      <div className="col-md-12">
                      <label htmlFor="password">Password</label>
                        <Field required component="input" name="password" type={this.state.hidden ? "password" : "text"} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                        <h6 style={{ paddingTop: "6px" }} className="password__show" onClick={() => {
                          this.setState({
                            hidden: !this.state.hidden
                          })
                        }}> <i class="fas fa-eye"></i> Check Password </h6>
                      </div>
                    </div>
                        <div className="row">
                          <div className="col-md-12">
                            
                              <button style={{ width: "100%", margin: "50px 0px" }} className="btn btn-success">Submit Part One</button>
                            
                          </div>
                        </div>
                            </form>
                           {/* <button style={{ marginTop: "20px" }} className="btn btn-danger" onClick={() => {
                              this.setState({
                                page: 1
                              })
                            }}>Back to page one</button>*/}
                          </div>
                        </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default reduxForm({
  form: 'confirmation' // a unique identifier for this form
})(connect(null, {})(Validate))
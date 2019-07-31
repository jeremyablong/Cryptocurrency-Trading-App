import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import { loginUser, signOut } from "../../actions/index.js";
import store from "../../store/store.js";
import  { Link } from "react-router-dom";
import "./universal.css";


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      data: [],
      loginEmail: "",
      loginPassword: ""
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  redirectRegistration = () => {
    this.props.history.push("/signup/initital");
  };
  redirectLogin = () => {
    this.props.history.push("/login");
  };
  logout = () => {
    localStorage.removeItem('JWTToken')
    this.props.signOut();

    console.log("Logout");

    this.props.history.push("/");
  };
  authorize = ()=> {
    if (localStorage.getItem("JWTToken")) {
      return (
        <button onClick={this.logout} style={{ marginRight: "20px" }} className="btn btn-danger" href="/">LOGOUT</button>
      );
    } else {
      return (
        <button onClick={this.redirectLogin} style={{ marginRight: "20px" }} className="btn btn-info" href="/">LOGIN</button>
      );
    }
  };
  renderSignUp = () => {
    if (!localStorage.getItem("JWTToken")) {
      return (
        <Link to="/signup/initital">
          <button onClick={this.redirectRegistration} className="btn btn-success register_btn">REGISTER</button>
        </Link>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Link to="/">
          <h4 id="brand">Crypto Chaining</h4>
        </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav_item" to="/learnMore">Accounts</Link>
              </NavItem>
             {/* {store.getState().authorize.data === "Email found, account verified.." ? <NavItem className="nav_item">
                <Link className="turn_black" to="/tracking/currencies">View Crypto Charts</Link>
              </NavItem> : null}
            */}
            <NavItem className="nav_item">
                <Link className="turn_black" to="/tracking/currencies">View Crypto Charts</Link>
            </NavItem>
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle  className="nav_item" nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                {this.authorize()}
              </NavItem>
              <NavItem>
              {this.renderSignUp()}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // if (state.authorize.data) {
  //   return {
  //     reg: state.authorize.data
  //   }
  // }
  return {
    
  }
}

export default withRouter(connect(mapStateToProps, { loginUser, signOut })(Navigation));
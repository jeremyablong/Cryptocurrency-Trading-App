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
  componentDidMount () {
    axios.get("/api/profile").then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  redirectRegistration = () => {
    this.props.history.push("/");
  };
  redirectLogin = () => {
    this.props.history.push("/login");
  };
  logout = () => {

    this.props.signOut();

    console.log("Logout");

    this.props.history.push("/");
  };
  authorize = ()=> {
    console.log(store.getState().authorize.data);
    if (store.getState().authorize.data === "Email found, account verified..") {
      return (
        <button onClick={this.logout} style={{ marginRight: "20px" }} className="btn btn-danger" href="/">LOGOUT</button>
      );
    } else {
      return (
        <button onClick={this.redirectLogin} style={{ marginRight: "20px" }} className="btn btn-info" href="/">LOGIN</button>
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Link to="/">
          <h4 id="brand">The Fitness Channel</h4>
        </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link to="/profile/register">
                <NavLink>Create A Profile</NavLink>
              </Link>
              {store.getState().authorize.data === "Email found, account verified.." ? <Link to="/tracking/diet">
                <NavLink>Chart Your Calories</NavLink>
              </Link> : null}
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
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
              <Link to="/">
                <button onClick={this.redirectRegistration} className="btn btn-success register_btn">REGISTER</button>
              </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  if (state.authorize.data) {
    return {
      reg: state.authorize.data
    }
  }
}

export default withRouter(connect(mapStateToProps, { loginUser, signOut })(Navigation));
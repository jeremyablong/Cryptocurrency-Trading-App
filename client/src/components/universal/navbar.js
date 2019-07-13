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
import { loginUser } from "../../actions/index.js";
import store from "../../store/store.js";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      data: []
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
    
  };
  authorize = ()=> {
    console.log(store.getState().authorize.data);
    if (this.props.reg === "Email found, account verified..") {
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
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">GitHub</NavLink>
              </NavItem>
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
                <button onClick={this.redirectRegistration} className="btn btn-success" href="/">REGISTER</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  if (state.authorize.data) {
    return {
      reg: state.authorize.data
    }
  }
}

export default withRouter(connect(mapStateToProps, { loginUser })(Navigation));
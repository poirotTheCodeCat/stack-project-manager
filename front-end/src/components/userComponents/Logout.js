/*
File: Logout.js 
Description: This file contains the logout navlink as a component 
*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";

export class Logout extends Component {
  propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <li className="nav-item" onClick={this.props.logout} href="#">
          <button className="nav-link">Logout</button>
        </li>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);

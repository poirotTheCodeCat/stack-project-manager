/*
File: navOptions.js 
Description: This file contains the nav options for the user menu
*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";

export class UserNavOptions extends Component {
  propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <li className="nav-item" onClick={this.props.logout} href="#">
          <a href="#">Projects</a>
          <a href="#">My Tasks</a>
        </li>
      </Fragment>
    );
  }
}

export default connect(null, { UserNavOptions })(UserNavOptions);
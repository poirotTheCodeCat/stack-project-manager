import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

function HomeNav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <NavLink className="home-nav-links navbar-brand" to="/">
          {" "}
          <h2 className="display-4">Stack</h2>{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <NavLink className="nav-item" to="/About">
              <li className="nav-link"> About </li>
            </NavLink>
            <NavLink className="nav-item" to="/Contact">
              <li className="nav-link">Contact</li>
            </NavLink>
            <NavLink className="nav-item" to="/SignUp">
              <li className="nav-link">Sign Up</li>
            </NavLink>
            <NavLink className="nav-item" to="/Login">
              <li className="nav-link">Login</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;

/*
File: UserNav.js 
Description: This file contains the navbar used 
*/
import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import Logout from "./Logout";

function UserNav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="navbar">
          <ul className="navbar-nav ml-auto">
            <Logout />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNav;

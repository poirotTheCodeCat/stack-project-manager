import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

class Welcome extends React.Component {
  render() {
    return (
      <div className="row-spacing-2">
        <br />
        <br />
        <div>
          <h1 className="display-4">Welcome to Stack</h1>
        </div>
        <div>
          <p className="lead">
            Stack is a project management web application that allows you to
            track tasks, monitor projects, track hours and more.
            <br />
            Try it for free now!
          </p>
          <hr />
          <NavLink to="/SignUp">
            <button type="button" className="btn btn-primary btn-lg">
              {" "}
              Sign Up{" "}
            </button>
          </NavLink>
          <NavLink to="Login">
            <button type="button" className="btn btn-outline-primary btn-lg">
              {" "}
              Login{" "}
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Welcome;

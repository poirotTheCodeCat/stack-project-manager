import React from "react";
import "../../App.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <form className="form-container">
        <div>
          <br />
          <h1 className="display-4">Login</h1>

          <hr className="titlehr" />
          <p classname="lead">
            If you already have an account enter your email and password to log
            in
          </p>
          <hr></hr>
          <br />
        </div>
        <div className="form-group">
          <label for="email" className="sr-only">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <input
          type="submit"
          className="btn btn-lg btn-primary "
          value="Sign Up"
        ></input>
      </form>
    );
  }
}

export default LoginForm;

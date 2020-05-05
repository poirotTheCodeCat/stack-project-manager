import React from "react";
import "../../App.css";

class SignUpForm extends React.Component {
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
          <h1 className="display-4">Sign Up</h1>
          <hr className="titlehr" />
          <p classname="lead">Try Stack for free!</p>
          <p classname="lead">Please enter your information to sign up</p>
          <hr></hr>
          <br />
        </div>
        <div className="form-group">
          <label for="name" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            className="form-control"
          ></input>
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
        <div className="form-group">
          <label for="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
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

export default SignUpForm;

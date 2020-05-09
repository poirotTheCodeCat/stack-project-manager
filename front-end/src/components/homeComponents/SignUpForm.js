import React from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

// Class : SignUpForm
// Desc: This class contians the Sign Up form component used to register a user
class SignUpForm extends React.Component {
  // Set the initial page state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    msg: null,
  };

  // add props to the component
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props; // get the error from the state - stored in props

    // check if the error has changed
    if (error !== prevProps.error) {
      // Check for registration error
      if (error.id === "REGISTER_FAIL") {
        // output the error to the screen
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }

      if (isAuthenticated) {
        // switch to user page
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // get register elements from the state
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    // create new user using the credentials that the user has provided
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    // attempt to register the user on the back end
    this.props.register(newUser);
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <div>
          <br />
          <h1 className="display-4">Sign Up</h1>
          <hr className="titlehr" />
          <p classname="lead">Try Stack for free!</p>
          <p classname="lead">Please enter your information to sign up</p>
          <hr></hr>
          {this.state.msg ? (
            <div className="alert-danger">{this.state.msg}</div>
          ) : null}
          <br />
        </div>
        <div className="form-group">
          <label for="name" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="form-control"
            onChange={this.onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="form-control"
            onChange={this.onChange}
          ></input>
        </div>
        <div className="form-group">
          <label for="email" className="sr-only">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label for="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label for="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-lg btn-primary "
          value="Sign Up"
        ></input>
        <div name="msg" id="msg" className="lead"></div>
      </form>
    );
  }
}

// map the state to the props within this component - used to access state within the component
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(SignUpForm);

import React from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import { login } from "../../actions/authActions";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  // add props to the component
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props; // get the error from the state - stored in props

    // check if the error has changed
    if (error !== prevProps.error) {
      // Check for registration error
      if (error.id === "LOGIN_FAIL") {
        // output the error to the screen
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isAuthenticated) {
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // update the values after user input
  };

  onSubmit = (e) => {
    e.preventDefault();

    // get info from state props
    const { email, password } = this.state; // get the email and password from the state

    const userInfo = { email, password }; // load login info into json object

    this.props.login(userInfo); // attempt to log in
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <div>
          <br />
          <h1 className="display-4">Login</h1>

          <hr className="titlehr" />
          <p classname="lead">
            If you already have an account enter your email and password to log
            in
          </p>
          <hr></hr>
          {this.state.msg ? (
            <div className="alert-danger">{this.state.msg}</div>
          ) : null}
          <br />
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
        <input
          type="submit"
          className="btn btn-lg btn-primary "
          value="Sign Up"
        ></input>
      </form>
    );
  }
}

// map the state to the props within this component - used to access state within the component
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginForm);

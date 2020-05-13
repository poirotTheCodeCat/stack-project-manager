import React from "react";
import HomeNav from "./HomeNav";
import About from "./About";
import SignUp from "./SignUp";
import Login from "./Login";
import Contact from "./Contact";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends React.Component {
  // set the props to be used
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  render() {
    console.log(this.props);
    if (this.props.isAuthenticated) {
      this.props.history.push("/User"); // if the user is logged in - automatically redirect to the user page
    }
    return (
      <Router>
        <div>
          <HomeNav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// map the props to the state
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Home);

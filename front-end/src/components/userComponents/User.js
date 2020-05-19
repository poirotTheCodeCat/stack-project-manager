import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserNav from "./UserNav";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class User extends React.Component {
  // set the props to be used
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {
    // Check if the user is logged in
    if (!this.props.isAuthenticated) {
      this.props.history.push("/"); // redirect to the Home page
    }

    const { history } = this.props;
    return (
      <div>
        <UserNav />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

// map the props to the state
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(User);

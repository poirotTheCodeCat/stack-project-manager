import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

class User extends React.Component {
  render() {
    // TODO: Add redirect if user is not logged in
    const { history } = this.props;
    return (
      <div>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default User;

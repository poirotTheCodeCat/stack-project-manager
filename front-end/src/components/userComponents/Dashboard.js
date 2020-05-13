import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;

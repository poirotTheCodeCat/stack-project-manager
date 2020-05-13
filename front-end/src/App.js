import React, { Component } from "react";
import "./App.css";
import Home from "./components/homeComponents/Home";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/userComponents/User";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Route exact path="/User" component={User} />
            <Route exact path="/" component={Home} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Home from "./components/homeComponents/Home";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Route path="/" exact component={Home} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

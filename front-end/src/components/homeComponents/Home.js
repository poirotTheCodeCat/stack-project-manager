import React from "react";
import HomeNav from "./HomeNav";
import About from "./About";
import SignUp from "./SignUp";
import Login from "./Login";
import Contact from "./Contact";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div>
        <HomeNav />
        <Switch>
          <Route path="/Home" exact component={HomePage} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;

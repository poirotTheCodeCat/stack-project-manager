import React from "react";
import "../../App.css";

function About() {
  return (
    <div>
      <h1 className="display-4">About</h1>
      <hr className="titlehr" />
      <br />
      <h2>What is Stack?</h2>
      <p className="lead">
        Stack is a web based project management tool designed to make it easy to
        track and manage various aspects of your projects.
        <br />
        Weither you are working alone on a passion project, or working within a
        large team, stack will help you
        <br /> manage documents, tasks, and billable hours. <br />
        <br />
        <hr className="abouthr" />
        <br />
        <h2>How does it work?</h2>
        Stack uses web based APIs to store information about your project in a
        database. By logging in anywhere, you will be able to access
        <br />
        your project details. This also allows you to log in from a mobile
        device using the Stack Web App in case you need to <br />
        check in with your progress on the go.
      </p>
    </div>
  );
}

export default About;

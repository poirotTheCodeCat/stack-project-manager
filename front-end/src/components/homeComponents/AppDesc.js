import React from "react";
import "../../App.css";

function AppDesc() {
  return (
    <div className="container-fluid padding jumbotron">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 clasname="display-4">Plan your project</h1>
        </div>
        <div className="col-12">
          <p className="lead">
            By yourself or with a team,
            <br /> organize and take control of your project
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppDesc;

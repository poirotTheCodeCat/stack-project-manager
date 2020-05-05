import React from "react";
import SignUpForm from "./SignUpForm";
import "../../App.css";

function SignUp() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <br />
          <h1 className="display-4">Lets Get Started</h1>
          <hr className="titlehr" />
          <div>
            <p className="lead">You can sign up to get started using Stack!</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

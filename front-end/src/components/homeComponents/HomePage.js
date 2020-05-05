import React from "react";
import Welcome from "./Welcome";
import AppDesc from "./AppDesc";
import "../../App.css";

function HomePage() {
  return (
    <div>
      <Welcome />
      <br />
      <AppDesc />
    </div>
  );
}

export default HomePage;

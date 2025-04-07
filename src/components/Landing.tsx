import React from "react";
import Navbar from "./Navbar";
import MenuItem from "./MenuItem";

function Landing() {
  return (
    <div>
      <Navbar />
      <h1>Order</h1>
      <h2>Filter by</h2>
      <MenuItem />
    </div>
  );
}

export default Landing;

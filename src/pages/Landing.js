// import libs/other
import React from "react";

// import components
import Signup from "../components/Signup";
import Reviews from "../components/Reviews.js";

const Landing = () => {
  return (
    <div>
      <div
        style={{ height: "calc(100vh - 56px)", marginBottom: 0 }}
        className="landingSection d-flex flex-column align-items-center justify-content-center"
        fluid
      >
        <h1 className="display-3">Better Food For Everydoggy</h1>
        <p className="lead">
          Our mission is to create food that is higher quality, lower cost, more
          varied and pretty much more accessible in every way than traditional
          dog food.
        </p>
      </div>
      <Reviews />
      <Signup />
    </div>
  );
};

export default Landing;

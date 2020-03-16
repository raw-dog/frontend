// import libs/other
import React from "react";
import { Jumbotron } from "reactstrap";

const Meals = () => {
  return (
    <div>
      <Jumbotron
        style={{ height: "calc(100vh - 56px)", marginBottom: 0 }}
        className="landingSection"
        fluid
      >
        <h1 className="display-3">Better Food For Everydoggy</h1>
        <p className="lead">
          Our mission is to create food that is higher quality, lower cost, more
          varied and pretty much more accessible in every way than traditional
          dog food.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Meals;

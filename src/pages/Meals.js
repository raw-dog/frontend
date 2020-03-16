import React from "react";
import { Jumbotron, Container } from "reactstrap";

import Signup from "../components/Signup";

const Meals = () => {
  return (
    <div>
      <Jumbotron
        style={{ height: "calc(100vh - 56px)", marginBottom: 0 }}
        className="landingSection"
        fluid
      >
        <Container fluid>
          <h1 className="display-3">Better Food For Everydoggy</h1>
          <p className="lead">
            Our mission is to create food that is higher quality, lower cost,
            more varied and pretty much more accessible in every way than
            traditional dog food.
          </p>
        </Container>
      </Jumbotron>
      <Signup />
    </div>
  );
};

export default Meals;

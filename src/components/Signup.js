import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const Signup = () => {
  return (
    <div
      id="signup"
      className="fullPageHeight d-flex flex-column align-items-center justify-content-center"
    >
      <h2 className="display-5">Getting started is simple!</h2>
      <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Your email</Label>
              <Input type="email" placeholder="ex: example@email.com" />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="password">Pick a password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="passwordConfirm">Confirm your password</Label>
              <Input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" size="lg">
          Sign Up!
        </Button>
      </Form>
    </div>
  );
};

export default Signup;

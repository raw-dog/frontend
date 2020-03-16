import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const SignIn = () => {
  return (
    <div
      id="signup"
      className="fullPageHeight d-flex flex-column align-items-center justify-content-center"
    >
      <h2 className="display-5">Sign In To Your Raw Dog Account</h2>
      <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Email</Label>
              <Input type="email" placeholder="ex: example@email.com" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" size="lg">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;

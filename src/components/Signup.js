import React from 'react'
import {Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const Signup = () => {
  return (
    <div>
      <Jumbotron id="signup-section" fluid>
        <h1 className="display-3">Welcome to the future of dog food!</h1>
        <FormGroup>
            <Label for="dogNum">How many dogs do you have?</Label>
          </FormGroup>
        <Form>

          <FormGroup>
            <Label for="dogName-1">What is your dogs name?</Label>
            <Input type="text" name="dogName-1" id="dogName-1" placeholder="ex: Peanut, Keke, Bella" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Jumbotron>
    </div>
  )
}

export default Signup;

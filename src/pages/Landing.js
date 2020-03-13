import React from 'react';
import {Jumbotron, Container} from 'reactstrap';

const Landing = () => {
  return (
    <div>
      <Jumbotron style={{height: "calc(100vh - 56px)"}} className="landing-section" fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Landing;
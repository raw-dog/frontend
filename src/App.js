// import libs/other
import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

// import components
import Menu from "./components/Menu.js";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// import pages
import Landing from "./pages/Landing";
import SignInPage from "./pages/SignIn";
import Meals from "./pages/Meals";

// custom app css
import "./styles/css/App.css";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  return (
    <>
      <Menu />
      <Container>
        {!loaded ? (
          <Loader />
        ) : (
          <div>
            {/* pages switch goes here */}
            <Switch>
              <Route exact path="/" render={props => <Landing />} />
              <Route
                path="/signin"
                render={props => <SignInPage {...props} />}
              />
              <Route path="/meals" render={props => <Meals {...props} />} />
            </Switch>
          </div>
        )}
      </Container>
    </>
  );
}

export default App;

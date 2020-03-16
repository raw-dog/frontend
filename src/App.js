import React, { useState, useEffect } from "react";

// components and pages
import Menu from "./components/Menu.js";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import { Container } from "reactstrap";

// custom app css
import "./styles/css/App.css";

// import components
import Loader from "./components/Loader";

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
            <Landing />
            <Footer />
          </div>
        )}
      </Container>
    </>
  );
}

export default App;

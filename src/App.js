import React from "react";

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
  return (
    <>
      <Menu />
      <Container>
        <Loader />
        {/* pages switch goes here */}
        <Landing />
        <Footer />
      </Container>
    </>
  );
}

export default App;

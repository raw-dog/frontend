import React from 'react';

// components and pages
import Menu from './components/Menu.js';
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Menu />
      {/* pages go here */}
      <Landing />
      <Footer />
    </>
  )
}

export default App;

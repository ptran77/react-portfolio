import './App.css';

import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function App() {
  // navigation options
  const [navOptions] = useState(['About Me', 'Portfolio', 'Contact', 'Resume']);

  // Setting the current render to About Me
  // setCurrentNavOp is used to change the navOption
  const [currentNavOp, setCurrentNavOp] = useState(navOptions[0]);
  
  return (
    <div>
      <Header
        // passing variables to Header component
        navOptions={navOptions}
        currentNavOp={currentNavOp}
        setCurrentNavOp={setCurrentNavOp}
      />
      { // if currentNavOp is 'About Me' render About component
        currentNavOp === 'About Me' &&
        <About />
      }
      { // if currentNavOP is 'Portfolio' render Portfolio component
        currentNavOp === 'Portfolio' &&
        <Portfolio />
      }
      { // if cuurentNavOp is 'Contact' render Contact component
        currentNavOp === 'Contact' &&
        <Contact />
      }
      { // if cuurentNavOp is 'Resume' render Resume component
        currentNavOp === 'Resume' &&
        <Resume />
      }
      <Footer />
    </div>
  );
}

export default App;

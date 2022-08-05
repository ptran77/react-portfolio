import './App.css';

import React, { useState } from 'react';
import Header from './components/Header';
//import Footer from './components/Footer';

function App() {
  // navigation options
  const navOptions = useState(['About Me', 'Portfolio', 'Contact', 'Resume']);

  // Setting the current render to About Me
  // setCurrentNavOp is used to change the navOption
  const [currentNavOp, setCurrentNavOp] = useState(navOptions[0]);

  // use for nav component to decide which should be highlighted when selected
  const [navOpSelected, setNavOpSelected] = useState(false);
  
  return (
    <Header
      navOptions={navOptions}
      currentNavOp={currentNavOp}
      setCurrentNavOp={setCurrentNavOp}
      navOpSelected={navOpSelected}
      setNavOpSelecte={setNavOpSelected}
    />
  );
}

export default App;

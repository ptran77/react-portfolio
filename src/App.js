import './App.css';

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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

      <Footer />
    </div>
  );
}

export default App;

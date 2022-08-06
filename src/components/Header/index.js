import React, { useState } from 'react';
// import Nav component to use inside header
import Nav from '../Nav';

function Header(props) {
  // destructure props
  const {
    navOptions = [],
    currentNavOp,
    setCurrentNavOp,
  } = props;

  // use for nav component to decide which should be highlighted when selected
  const [navOpSelected, setNavOpSelected] = useState(false);

  return (
    <header className="bg-dark row px-4 py-4">
      <h1 className="col-12 col-sm-12 col-md-4">
        <a href="/" className="text-white text-decoration-none ">Peter Tran</a>
      </h1>
      <Nav
        // passing variables to Header component
        navOptions={navOptions}
        currentNavOp={currentNavOp}
        setCurrentNavOp={setCurrentNavOp}
        navOpSelected={navOpSelected}
        setNavOpSelected={setNavOpSelected}
      />
    </header>
  )
}

export default Header;
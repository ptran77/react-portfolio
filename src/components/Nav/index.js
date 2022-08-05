import React from 'react';

function Nav(props) {
  // destructure props
  const {
    navOptions = [],
    currentNavOp,
    setCurrentNavOp,
    navOpSelected,
    setNavOpSelected
  } = props;

  return (
    <nav>
      <ul>
        {// Making a list item for each nav option
          navOptions.map((navOp) => (
          <li
            className={`${currentNavOp === navOp && !navOpSelected && 'navActive'}`}
            key={navOp}
          >
            <span onClick={() => {
              // onClick to set current nav to the click one
              setCurrentNavOp(navOp)
              setNavOpSelected(false)
            }}>
              {navOp}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;
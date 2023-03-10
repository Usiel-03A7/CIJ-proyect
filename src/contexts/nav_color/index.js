import React from 'react';

const NavColorContext = React.createContext({
  navColor: 'transparent',
  setNavColor: () => {},
});

export default NavColorContext;

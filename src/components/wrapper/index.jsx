import React, { useMemo, useState } from 'react';
import NavColorContext from '../../contexts/nav_color';
import Nav from '../navbar/Nav';
import Carrousel from '../carrousel/carrousel';

function Wrapper() {
  const [navColor, setNavColor] = useState('trasnparent');
  const navColorMemo = useMemo(() => ({ navColor, setNavColor }), [navColor, setNavColor]);

  return (
    <NavColorContext.Provider value={navColorMemo}>
      <Nav />
      <Carrousel setNavColor={setNavColor} />
    </NavColorContext.Provider>
  );
}

export default Wrapper;

/*
  The contextfile which contains the state of the menu
*/

import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  //The state of the calculator is always a string
  const [menu, setMenu] = useState(false);

  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;

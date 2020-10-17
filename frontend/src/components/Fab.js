import React, { useContext } from "react";

import "./Fab.css";

import { MenuContext } from "../context/MenuContext";

const Fab = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="fab" onClick={handleClick}>
      <p>...</p>
    </div>
  );
};

export default Fab;

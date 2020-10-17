import React, { useContext } from "react";

import { MenuContext } from "../context/MenuContext";

const LoadButton = () => {
  const [menu] = useContext(MenuContext);

  return (
    <div
      style={menu ? { display: "flex" } : { display: "none" }}
      className="button special-button"
    >
      L
    </div>
  );
};

export default LoadButton;

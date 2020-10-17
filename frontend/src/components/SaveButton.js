import React, { useContext } from "react";

import { MenuContext } from "../context/MenuContext";

const SaveButton = () => {
  const [menu] = useContext(MenuContext);

  return (
    <div
      style={menu ? { display: "flex" } : { display: "none" }}
      className="button special-button"
    >
      S
    </div>
  );
};

export default SaveButton;

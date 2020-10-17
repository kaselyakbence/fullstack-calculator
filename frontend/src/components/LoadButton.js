import React, { useContext } from "react";

import { MenuContext } from "../context/MenuContext";

import styles from "../style/Button.module.css";

const LoadButton = () => {
  const [menu] = useContext(MenuContext);

  return (
    <div
      style={menu ? { display: "flex" } : { display: "none" }}
      className={`${styles.button}  ${styles.specialButton}`}
    >
      L
    </div>
  );
};

export default LoadButton;

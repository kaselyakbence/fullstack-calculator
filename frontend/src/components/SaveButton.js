import React, { useContext } from "react";

import { MenuContext } from "../context/MenuContext";

import styles from "../style/Button.module.css";

const SaveButton = () => {
  const [menu] = useContext(MenuContext);

  return (
    <div
      style={menu ? { display: "flex" } : { display: "none" }}
      className={`${styles.button}  ${styles.specialButton}`}
    >
      S
    </div>
  );
};

export default SaveButton;

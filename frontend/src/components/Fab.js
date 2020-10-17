import React, { useContext } from "react";

import styles from "../style/Fab.module.css";

import { MenuContext } from "../context/MenuContext";

const Fab = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.fab} onClick={handleClick}>
      <p>...</p>
    </div>
  );
};

export default Fab;

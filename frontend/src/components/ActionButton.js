/*
  Button component for all the special actions
*/

import React, { useContext } from "react";
import styles from "../style/ActionButton.module.css";

import { OutputContext } from "../context/OutputContext";

const ActionButton = ({ val }) => {
  const [, setOutput] = useContext(OutputContext);

  //Checking the operation
  const handleClick = () => {
    if (val === "C") {
      setOutput("");
    }
  };

  return (
    <div className={styles.actButton} onClick={handleClick}>
      {val}
    </div>
  );
};

export default ActionButton;

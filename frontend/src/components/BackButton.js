import React, { useContext } from "react";

import BackSVG from "../assets/back.svg";

import styles from "../style/BackButton.module.css";

import { OutputContext } from "../context/OutputContext";

const Backbutton = () => {
  const [output, setOutput] = useContext(OutputContext);

  const handleClick = () => {
    setOutput(output.slice(0, -1));
  };

  return (
    <div onClick={handleClick}>
      <img className={styles.backButton} src={BackSVG} alt="Delete button" />
    </div>
  );
};

export default Backbutton;

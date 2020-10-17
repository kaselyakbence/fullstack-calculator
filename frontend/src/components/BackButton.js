import React, { useContext } from "react";

import BackSVG from "../assets/back.svg";

import "./Backbutton.css";

import { OutputContext } from "../context/OutputContext";

const Backbutton = () => {
  const [output, setOutput] = useContext(OutputContext);

  const handleClick = () => {
    setOutput(output.slice(0, -1));
  };

  return (
    <div onClick={handleClick}>
      <img className="back-button" src={BackSVG} alt="Delete button" />
    </div>
  );
};

export default Backbutton;

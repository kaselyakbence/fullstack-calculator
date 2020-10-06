/*
  Button component for all the special actions
*/

import React, { useContext } from "react";
import "./Actionbutton.css";

import { OutputContext } from "../context/OutputContext";

import { save, load } from "../api/api";

const ActionButton = ({ val }) => {
  const [output, setOutput] = useContext(OutputContext);

  //Checking the operation
  const handleClick = async () => {
    if (val === "C") {
      setOutput("");
    } else if (val === "S") {
      save(output);
    } else if (val === "L") {
      if (/^[\s\d\.]*$/.test(output.slice(-1))) {
        setOutput(await load());
      } else {
        setOutput(output + (await load()));
      }
    }
  };

  return (
    <div className="act-button" onClick={handleClick}>
      {val}
    </div>
  );
};

export default ActionButton;

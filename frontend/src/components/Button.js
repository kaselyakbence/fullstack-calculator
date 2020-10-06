/*
  Button component for all the numbers and operations
*/

import React, { useContext } from "react";

import "./Button.css";

import { OutputContext } from "../context/OutputContext";

const Button = ({ val }) => {
  const [output, setOutput] = useContext(OutputContext);

  //Checking if its a valid valid operation
  const handleClick = () => {
    if (/=/.test(val)) {
      setOutput(eval(output).toString());
    } else if (
      /(?<!\S)\d(?!\S)/.test(val) ||
      /^[\s\d]*$/.test(output.slice(-1))
    ) {
      setOutput(output + val);
    }
  };

  return (
    <div className="button" onClick={handleClick}>
      {val}
    </div>
  );
};

export default Button;

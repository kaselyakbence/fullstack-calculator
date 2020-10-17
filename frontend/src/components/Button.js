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
      setOutput((Math.round(eval(output) * 10000000) / 10000000).toString());
    } else if (
      /(?<!\S)\d(?!\S)/.test(val) ||
      /^[\s\d]*$/.test(output.slice(-1))
    ) {
      if (val === "." || /^\d+$/.test(val)) {
        try {
          eval(output + val);
          setOutput(output + val);
        } catch (e) {}
      } else {
        setOutput(output + val);
      }
    }
  };

  return (
    <div className="button" onClick={handleClick}>
      {val}
    </div>
  );
};

export default Button;

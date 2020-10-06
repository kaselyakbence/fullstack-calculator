import React, { useContext } from "react";

import "./Output.css";

import { OutputContext } from "../context/OutputContext";

const Output = () => {
  const [output] = useContext(OutputContext);

  return <div className="output">{output}</div>;
};

export default Output;

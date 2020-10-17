/*
  Component for showing the state
*/

import React, { useContext } from "react";

import "./Output.css";

import Backbutton from "./BackButton";

import { OutputContext } from "../context/OutputContext";

const Output = () => {
  const [output] = useContext(OutputContext);

  return (
    <div className="output">
      <Backbutton />
      <p>{output}</p>
    </div>
  );
};

export default Output;

/*
  The contextfile which contains the state of the calculator
*/

import React, { createContext, useState } from "react";

export const OutputContext = createContext();

const OutputContextProvider = (props) => {
  //The state of the calculator is always a string
  const [output, setOutput] = useState("");

  return (
    <OutputContext.Provider value={[output, setOutput]}>
      {props.children}
    </OutputContext.Provider>
  );
};

export default OutputContextProvider;

import React, { createContext, useState } from "react";

export const OutputContext = createContext();

const OutputContextProvider = (props) => {
  const [output, setOutput] = useState("");

  return (
    <OutputContext.Provider value={[output, setOutput]}>
      {props.children}
    </OutputContext.Provider>
  );
};

export default OutputContextProvider;

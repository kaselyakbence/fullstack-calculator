import React from "react";
import "./App.css";

import Button from "./components/Button";
import ActionButton from "./components/ActionButton";
import Output from "./components/Output";

const OutputContext = React.createContext("0");

function App() {
  return (
    <div className="calculator">
      <OutputContext.Provider value="0">
        <div className="row">
          <Output />
        </div>
        <div className="row">
          <Button val={1} />
          <Button val={2} />
          <Button val={3} />
          <Button val={"*"} />
        </div>
        <div className="row">
          <Button val={4} />
          <Button val={5} />
          <Button val={6} />
          <Button val={"/"} />
        </div>
        <div className="row">
          <Button val={7} />
          <Button val={8} />
          <Button val={9} />
          <Button val={"-"} />
        </div>
        <div className="row">
          <Button val={"."} />
          <Button val={0} />
          <Button val={"="} />
          <Button val={"+"} />
        </div>
        <div className="row">
          <ActionButton val={"C"} />
          <ActionButton val={"S"} />
          <ActionButton val={"L"} />
        </div>
      </OutputContext.Provider>
    </div>
  );
}

export default App;

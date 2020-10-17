/*
  Component for containing the application structure
*/

import React from "react";
import "./App.css";

import Button from "./components/Button";
import ActionButton from "./components/ActionButton";
import Output from "./components/Output";
import Fab from "./components/Fab";
import SaveButton from "./components/SaveButton";
import LoadButton from "./components/LoadButton";

import OutputContextProvider from "./context/OutputContext";
import MenuContextProvider from "./context/MenuContext";

function App() {
  return (
    <div className="calculator">
      <MenuContextProvider>
        <OutputContextProvider>
          <div className="display-row">
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
            <LoadButton />
          </div>
          <div className="row">
            <Button val={"."} />
            <Button val={0} />
            <Button val={"="} />
            <Button val={"+"} />
            <SaveButton />
          </div>
          <div className="row">
            <ActionButton val={"C"} />
            <Fab />
          </div>
        </OutputContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;

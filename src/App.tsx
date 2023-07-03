import React from "react";
import "./App.css";
import Button from "./ui/Button";

function App() {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        label="Learn More"
        onClick={() => {}}
      />
      <Button size="large" label="Add to Cart" onClick={() => {}} />
      <Button
        variant="contained"
        size="medium"
        label="Learn More"
        onClick={() => {}}
      />
      <Button label="Add to Cart" onClick={() => {}} />
    </>
  );
}

export default App;

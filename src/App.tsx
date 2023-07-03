import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./ui/Button";
import Card from "./ui/Card";

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
      <div className="wrapper">
        <Card
          imageSrc="mock-2.png"
          title="Example Product"
          price={19.99}
          description="This is an example product description."
          rating={5}
        />
        <Card
          imageSrc="mock.png"
          title="Example Product"
          price={30.0}
          description="This is an example product description."
          rating={5}
        />
      </div>
    </>
  );
}

export default App;

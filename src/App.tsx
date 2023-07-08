import React from "react";

import { Card } from "./components";
import { Tabs, Tab } from "./ui";

import "./App.css";

function App() {
  interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
  }

  const products: Product[] = [
    {
      id: 1,
      image: "mock-2.png",
      title: "Product 1",
      description: "This is the description for Product 1.",
      price: 9.99,
      rating: 4,
    },
    {
      id: 2,
      image: "mock.png",
      title: "Product 2",
      description: "This is the description for Product 2.",
      price: 19.99,
      rating: 4.5,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "This is the description for Product 3.",
      price: 29.99,
      rating: 3.1,
    },
  ];

  const tabs: { title: string; products: Product[] }[] = [
    {
      title: "Gadgets",
      products: products.slice(0, 2),
    },
    {
      title: "Fitness",
      products: products.slice(1, 3),
    },
    {
      title: "Education",
      products: products.slice(0, 3),
    },
  ];

  return (
    <>
      <Tabs>
        {tabs.map(({ title, products }, index) => (
          <Tab title={title} id={title + index}>
            {products.map((props) => (
              <Card key={props.id + title + index} {...props} />
            ))}
          </Tab>
        ))}
      </Tabs>
      <div className="wrapper">
        <Card
          image="mock-2.png"
          title="Example Product"
          price={19.99}
          description="This is an example product description."
          rating={5}
        />
        <Card
          image="mock.png"
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

import React from "react";

import { Card, Tabs } from "./ui/";

import "./App.css";

function App() {
  interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  }

  const products: Product[] = [
    {
      id: 1,
      image: "mock-2.png",
      title: "Product 1",
      description: "This is the description for Product 1.",
      price: 9.99,
    },
    {
      id: 2,
      image: "mock.png",
      title: "Product 2",
      description: "This is the description for Product 2.",
      price: 19.99,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "This is the description for Product 3.",
      price: 29.99,
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
      <Tabs
        tabs={tabs.map((tab) => ({
          title: tab.title,
          content: (
            <div className="wrapper">
              {tab.products.map((product) => (
                <Card
                  key={product.id}
                  imageSrc={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={5}
                />
              ))}
            </div>
          ),
        }))}
      />
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

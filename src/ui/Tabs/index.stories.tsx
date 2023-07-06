import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Card } from '../Card';

import { Tabs, Tab } from '.';

interface Product {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}
const products: Product[] = [
  {
    id: 1,
    imageSrc: "mock-2.png",
    title: "Product 1",
    description: "This is the description for Product 1.",
    price: 9.99,
    rating: 5,
  },
  {
    id: 2,
    imageSrc: "mock.png",
    title: "Product 2",
    description: "This is the description for Product 2.",
    price: 19.99,
    rating: 5,
  },
  {
    id: 3,
    imageSrc: "https://via.placeholder.com/150",
    title: "Product 3",
    description: "This is the description for Product 3.",
    price: 29.99,
    rating: 4,
  },
];

export default {
  title: 'UI/Tabs',
  args: {
    tabs: [
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
    ]
  },
} as Meta<{ tabs: { title: string; products: Product[] }[]}>;

export const Main: StoryFn<{ tabs: { title: string; products: Product[] }[]}> = ({ tabs }) => {
  return (
        <Tabs>
          {tabs.map(({ title, products }, index) => (
              <Tab title={title} id={title + index}>
                {products.map((props) => (
                  <Card key={props.id + title + index} {...props} />
                ))}
              </Tab>
            ))}
        </Tabs>
  )
}

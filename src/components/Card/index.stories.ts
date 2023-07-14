import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    image: "mock-2.png",
    title: "Example Product",
    price: 19.99,
    description: "This is an example product description.",
    rating: 5,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Main: Story = {
  args: {
    image: "mock-2.png",
    title: "Example Product",
    price: 19.99,
    description: "This is an example product description.",
    rating: 5,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { DiscountItem } from '.';

const meta: Meta<typeof DiscountItem> = {
  title: 'Components/DiscountItem',
  component: DiscountItem,
  args: {
    image: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
    title: "Example Product",
    price: 100,
    description: "Explore Our Furniture & Home Furnishing Range",
    color: "#cb9917",
    background: "#f2e4d9",
  },
};

export default meta;
type Story = StoryObj<typeof DiscountItem>;

export const Main: Story = {
  args: {
    image: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
    title: "Example Product",
    price: 100,
    description: "Explore Our Furniture & Home Furnishing Range",
    color: "#cb9917",
    background: "#f2e4d9",
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Section, SectionProps } from ".";
import { DiscountItem } from "../DiscountItem";

const meta: Meta<typeof Section> = {
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Main: Story = {
  render: () => (
    <Section title="Example">
      <DiscountItem
        image="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png"
        title="Example Product"
        price={100}
        description="Explore Our Furniture & Home Furnishing Range"
        color="#cb9917"
        background="#f2e4d9"
      />
    </Section>
  ),
};

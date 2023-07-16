import React from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { Header } from ".";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

export const Main: StoryFn = () => {
  return (
    <Header
      phoneNumber="+00123456789"
      logo="logo.svg"
      languages={["EN"]}
      locations={["EU"]}
    />
  );
};
export default meta;

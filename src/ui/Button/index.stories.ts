import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    variant: "contained",
    label: 'Button',
    size: "large",
  },
  argTypes: {
    onClick: { table: { disable: true } }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Main: Story = {
  args: {
    variant: "contained",
    label: 'Button',
    size: "large"
  },
};

// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: "contained",
    label: 'Button'
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: 'Button'
  },
};

export const Large: Story = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };

  export const Medium: Story = {
    args: {
      size: 'medium',
      label: 'Button',
    },
  };

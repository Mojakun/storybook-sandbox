// Button.stories.tsx

import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    mode: "primary",
  },
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Interactive = () => (
  <Button
    size="medium"
    mode="primary"
    onClick={() => alert("Button clicked!")}
  />
);

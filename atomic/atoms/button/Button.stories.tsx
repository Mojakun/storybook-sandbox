// Button.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

import { expect } from "@storybook/jest";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
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

export const ButtonClick: Story = {
  args: {
    size: "small",
    onClick: action("onClick"),
  },
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();
  },
};

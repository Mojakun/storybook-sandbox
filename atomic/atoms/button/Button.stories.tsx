import { Meta, Story, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { expect } from "@storybook/jest";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
  },
} as Meta;

type ButtonProps = StoryFn<typeof Button>;

const Template: ButtonProps = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const ClickButtonStory: ButtonProps = Template.bind({});
ClickButtonStory.args = {
  onClick: action("onClick"),
};

ClickButtonStory.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  userEvent.click(button);
  expect(args.onClick).toHaveBeenCalled();
};

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

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  mode: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  mode: "secondary",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: "large",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: "medium",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "small",
};

export const ClickButton: ButtonProps = Template.bind({});
ClickButton.args = {
  onClick: action("onClick"),
};

ClickButton.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  userEvent.click(button);
  expect(args.onClick).toHaveBeenCalled();
};

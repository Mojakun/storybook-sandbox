import React from "react";
import { StoryFn } from "@storybook/react";
import { Confirm } from "./Confirm";

export default {
  title: "molecules/Confirm",
  component: Confirm,
};

type Story = StoryFn<typeof Confirm>;

const Template: Story = (args) => <Confirm {...args} />;

export const ExampleConfirm = Template.bind({});
ExampleConfirm.args = {
  title: "Confirmation",
  onSubmit: () => {
    console.log("Confirmation submitted");
  },
};

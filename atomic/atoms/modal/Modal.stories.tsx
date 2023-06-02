import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  title: "atoms/Modal",
  component: Modal,
} as Meta;

type Story = StoryFn<typeof Modal>;

const Template: Story = (args) => {
  return (
    <Modal {...args} isOpen={true}>
      <p>Modal Content</p>
    </Modal>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  title: "Modal Title",
};

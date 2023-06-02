import React, { useCallback, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "atoms/Modal",
  component: Modal,
} as Meta;

type Story = StoryFn<typeof Modal>;

const Template: Story = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(args.isOpen);

  const modalHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Modal {...args} isOpen={isOpen} onClose={modalHandler}>
      <p>Modal Content</p>
    </Modal>
  );
};

export const Default: Story = Template.bind({});

Default.args = {
  isOpen: true,
  title: "Modal Title",
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const modal = canvas.getByRole("dialog");
  expect(modal).toBeVisible();
  const cancelButton = canvas.getByRole("button", { name: "キャンセル" });
  userEvent.click(cancelButton);
   // モーダルが閉じるまで少し待つ
   await new Promise((resolve) => setTimeout(resolve, 500));
   
  const modalAfterClose = canvas.queryByRole("dialog");
  expect(modalAfterClose).toBeNull();
};

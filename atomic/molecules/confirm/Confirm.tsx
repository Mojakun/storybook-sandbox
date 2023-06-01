"use client";

import { Button } from "../../atoms/button/Button";
import { Modal } from "../../atoms/modal/Modal";
import React, { PropsWithChildren, useCallback, useState } from "react";

type Props = {
  title: string;
  onSubmit: () => Promise<void> | void;
};
export function Confirm({
  title,
  onSubmit,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Button onClick={modalHandler}>確認</Button>
      <Modal
        isOpen={isOpen}
        title={title}
        onClose={modalHandler}
        onSubmit={onSubmit}
      >
        {children}
      </Modal>
    </>
  );
}

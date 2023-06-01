import React, { PropsWithChildren } from "react";
import "./Modal.style.css";

type Props = Readonly<{
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}>;

export function Modal({
  isOpen,
  title,
  onClose,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

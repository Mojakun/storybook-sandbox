import React, { PropsWithChildren, useCallback } from "react";
import "./Modal.style.css";

type Props = Readonly<{
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => Promise<void> | void;
}>;

export function Modal({
  isOpen,
  title,
  onClose,
  onSubmit,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  if (!isOpen) {
    return <></>;
  }

  const handleConfirm = useCallback(async () => {
    try {
      await onSubmit();
      onClose();
    } catch (error) {
      console.error("Submit error:", error);
    }
  }, [onSubmit, onClose]);

  return (
    <div className="modal" role="dialog">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-cancel" onClick={onClose}>
            キャンセル
          </button>
          <button className="modal-submit" onClick={handleConfirm}>
            実行
          </button>
        </div>
      </div>
    </div>
  );
}

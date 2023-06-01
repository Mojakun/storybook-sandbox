"use client";

import React, { PropsWithChildren } from "react";
import "./Button.style.css";

type Props = Readonly<{
  size?: "small" | "medium" | "large";
  mode?: "primary" | "secondary";
  onClick: () => void;
}>;

export function Button({
  size = "medium",
  mode = "primary",
  onClick,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const buttonText = children || "Submit";
  return (
    <button
      onClick={onClick}
      className={["button", `button--${size}`, `button-${mode}`].join(" ")}
    >
      {buttonText}
    </button>
  );
}

import React from "react";

import classnames from "classnames";

import "./index.css";

export interface ButtonProps {
  variant?: "contained" | "outlined";
  size?: "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  size = "medium",
  label,
  onClick,
}) => {
  return (
    <button
      className={classnames("button", { [variant]: true }, { [size]: true })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

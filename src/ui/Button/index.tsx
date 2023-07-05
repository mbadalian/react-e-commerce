import React from "react";

import "./index.css";

interface ButtonProps {
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
    <button className={`button ${variant} ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

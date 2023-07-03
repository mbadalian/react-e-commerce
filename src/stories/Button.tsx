import React from "react";
import "./button.css";

interface ButtonProps {
  variant?: "contained" | "outlined";
  size?: "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "outlined",
  size = "medium",
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button ${variant} ${size}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

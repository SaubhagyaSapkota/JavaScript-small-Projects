import React from "react";
import "./style.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "rounded"
  | "squared";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`btn 
        btn--${variant} 
        btn--${size}
        ${disabled ? "btn--disabled" : ""}
        ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

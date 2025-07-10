import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import "./style.css";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn--primary",
      secondary: "btn--secondary",
      outline: "btn--outline",
      text: "btn--text",
      rounded: "btn--rounded",
      squared: "btn--squared",
    },
    size: {
      sm: "btn--sm",
      md: "btn--md",
      lg: "btn--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled}
      {...props}
    />
  );
};

export default Button;

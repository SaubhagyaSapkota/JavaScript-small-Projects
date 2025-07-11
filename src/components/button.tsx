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
      disabled: "btn--disabled",
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


// // in App.tsx

// return (
//   <div className="button-container">
//     <Button variant="primary" size="sm">
//       Primary
//     </Button>

//     <Button variant="secondary" size="sm">
//       Secondary
//     </Button>

//     <Button variant="outline" size="sm">
//       Outline
//     </Button>

//     <Button variant="text" size="lg">
//       Text
//     </Button>

//     <Button variant="rounded" size="lg">
//       Rounded
//     </Button>

//     <Button variant="squared" size="md">
//       Squared
//     </Button>

//     <Button variant="disabled" disabled>
//       Disabled
//     </Button>
//   </div>
// );
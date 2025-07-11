import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { useState } from "react";
import def from "../assets/icons8-eye-30.png";
import clo from "../assets/icons8-closed-eye-30.png";
import sus from "../assets/icons8-success-30.png";
import err from "../assets/icons8-error-24.png";

const input = cva("border-1 focus:outline-none pl-10 ", {
  variants: {
    status: {
      default: "border-gray-300",
      error: "border-gray-300 focus:ring-2 focus:ring-red-600",
      success: "border-gray-300 focus:ring-2 focus:ring-green-600",
    },
    inputsize: {
      sm: "px-2 py-1 text-sm rounded",
      md: "px-3 py-2 text-base rounded-md",
      lg: "px-4 py-3 text-lg rounded-lg",
    },
  },
  defaultVariants: {
    status: "default",
    inputsize: "md",
  },
});
const helpertextStyle = cva("text-sm font-medium mt-1", {
  variants: {
    textstatus: {
      default: "text-gray-400",
      error: "text-red-500",
      success: "text-green-500",
    },
  },
  defaultVariants: {
    textstatus: "default",
  },
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    label?: string;
    className?: string;
    helpertext?: string;
    textstatus?: "default" | "error" | "success";
    type?: string;
  };

export const Input: React.FC<InputProps> = ({
  className,
  inputsize,
  status,
  label,
  helpertext,
  textstatus,
  type = "text",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const getIcon = () => {
    if (type === "password") {
      return showPassword ? def : clo;
    }
    switch (status) {
      case "error":
        return err;
      case "success":
        return sus;
      default:
        return def;
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
    setTextFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;
  return (
    <div>
      {label && (
        <label className="text-sm font-medium text-gray-400">{label}</label>
      )}
      <div className="relative">
        <input
          className={input({ status, inputsize, className })}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={inputType}
          {...props}
        />
        {(isFocused || type === "password") && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              src={getIcon()}
              alt={
                type === "password"
                  ? showPassword
                    ? "Hide password"
                    : "Show password"
                  : "status icon"
              }
              className={`${
                inputsize === "sm"
                  ? "h-4 w-4"
                  : inputsize === "md"
                  ? "h-5 w-5"
                  : "h-6 w-6"
              } ${type === "password" ? "cursor-pointer" : ""}`}
              onClick={
                type === "password" ? togglePasswordVisibility : undefined
              }
            />
          </span>
        )}
      </div>
      {textFocused && helpertext && (
        <p className={helpertextStyle({ textstatus })}>{helpertext}</p>
      )}
    </div>
  );
};

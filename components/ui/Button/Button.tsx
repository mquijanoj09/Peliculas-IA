import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "rounded";
}

export const Button = ({
  children,
  onClick,
  type,
  className,
  variant,
}: Props) => {
  return (
    <button
      className={`bg-dark-purple px-8 py-2 rounded-lg text-white inline-block shadow-md hover:bg-light-purple ${className} ${
        variant === "primary" ? "" : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

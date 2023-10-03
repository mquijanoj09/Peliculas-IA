import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button = ({ children, onClick, type, className }: Props) => {
  return (
    <button
      className={`bg-dark-purple px-8 py-2 rounded-lg text-white inline-block shadow-md  hover:bg-light-purple ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

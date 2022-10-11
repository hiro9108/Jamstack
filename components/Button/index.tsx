import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

/**
 * Additional Docs
 */
export const Button = ({ type, children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      className="text-white bg-red-500 rounded-full py-2 px-6 min-w-[110px] transition duration-500 hover:border hover:bg-white hover:text-red-500 hover:scale-105"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

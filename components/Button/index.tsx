import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

/**
 * Additional Docs
 */
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="text-white bg-red-500 rounded-full py-2 px-6"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

import React from "react";
import { Button } from "..";

type CardProps = {
  title: string;
  content: string;
  onClick: () => void;
};

/**
 * Additional Docs
 */
export const Card = ({ title, content, onClick }: CardProps) => {
  return (
    <div className="shadow-xl p-4 m-4 border rounded transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:bg-red-50 duration-300 ">
      <div className="underline font-bold text-lg truncate">{title}</div>
      <div className="h-24 my-4 line-clamp-4">{content}</div>
      <div className="text-center">
        <Button type="button" onClick={onClick}>
          See more
        </Button>
      </div>
    </div>
  );
};

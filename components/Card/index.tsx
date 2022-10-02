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
    <div className="p-4 m-4 border rounded border-white text-white break-words">
      <div className="underline font-bold text-lg">{title}</div>
      <div className="py-2">{content}</div>
      <div>
        <Button onClick={onClick}>See more</Button>
      </div>
    </div>
  );
};

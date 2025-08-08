import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: props) => {
  const classes: string = "w-full bg-neutral-200 dark:bg-neutral-800";

  return (
    <div className={`${classes} ${className} my-2 rounded-md`}>{children}</div>
  );
};

export default Card;

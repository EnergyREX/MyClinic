import React from "react";

interface props {
  className?: string;
}

const Divider = ({ className }: props) => {
  const classes: string =
    "border-b-1 border-neutral-850 dark:border-neutral-100/50";

  return <div className={`${classes} ${className}`}></div>;
};

export default Divider;

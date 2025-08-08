import React, { ReactNode } from "react";

interface props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Badge({ children, ...props }: props) {
  const baseClass: string =
    "border-1 m-0.5 px-1 rounded-sm text-neutral-600 dark:text-neutral-300";

  return (
    <div className={`${baseClass} ${props.className}`} {...props}>
      {children}
    </div>
  );
}

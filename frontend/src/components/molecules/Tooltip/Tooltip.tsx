import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  message: string;
}

export const Tooltip = ({ children, message }: Props) => {
  const baseClass: string = "cursor-pointer group relative inline-block";

  return (
    <div className={baseClass}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{message}</TooltipContent>
    </div>
  );
};

interface TriggerProps {
  children: ReactNode;
}

export const TooltipTrigger = ({ children }: TriggerProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export const TooltipContent = ({ children }: TriggerProps) => {
  const displayClasses: string = "bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 opacity-0 position";
  const animationsClasses: string = "transition duration-200 ease-in-out group-hover:block group-hover:scale-110 group-hover:opacity-100";
  const styleClasses: string = "bg-neutral-700 p-1"

  return (
    <div className={`${displayClasses} ${styleClasses} ${animationsClasses}`}>
      {children}
    </div>
  );
};

export default Tooltip;

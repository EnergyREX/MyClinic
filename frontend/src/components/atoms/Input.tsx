import React from "react";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: props) => {
  const styles: string = "border-1 border-neutral-400 p-1 rounded-sm";

  const animations: string =
    "duration-200 focus:border-neutral-300 focus:shadow-md shadow-neutral-700 dark:shadow-neutral-200/20 hover:shadow-md";

  return (
    <input className={`${styles} ${animations} ${className}`} {...props} />
  );
};

export default Input;

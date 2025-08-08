import React, { ReactNode } from "react";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // for the plain text inside the button.
  size: "sm" | "lg" | "xl"; // stablishes the size of the button.
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "danger-secondary"
    | "success"
    | "sucess-secondary"
    | "neutral"
    | "neutral-secondary"
    | "text"; // one of the presetted styles.
  disabled?: boolean;
}

export const Button = ({
  children,
  size,
  variant,
  className,
  disabled,
  ...props
}: props) => {
  // Possible styles:
  // primary, secondary, danger, danger-secondary, sucess, success-secondary
  const classes: Record<string, string> = {
    primary:
      "bg-blue-500 text-neutral-950 border-blue-500 dark:bg-blue-700 dark:border-blue-700 dark:text-white",
    secondary:
      "border-2 border-blue-500 bg-blue-500/70 dark:border-blue-700 dark:bg-blue-700/30 dark:text-white",
    danger: "bg-red-500 dark:bg-red-700 dark:text-white",
    dangerSecondary:
      "border-2 border-red-500 bg-red-500/70 dark:border-red-700 dark:bg-red-700/30 dark:text-white",
    success: "bg-green-400 dark:bg-green-600 dark:text-white",
    successSecondary:
      "border-2 border-green-500 bg-green-500/70 dark:border-green-700 dark:bg-green-700/30 dark:text-white",
    neutral:
      "bg-neutral-300 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 font-medium dark:text-white shadow-neutral-700/20 dark:shadow-neutral-200/20 hover:shadow-md",
    neutralSecondary:
      "border-2 border-neutral-500 bg-neutral-200/70 dark:border-neutral-200 dark:bg-neutral-200/70 dark:text-neutral-900 font-medium dark:text-white",
    text: "hover:bg-neutral-500 py-1 border-neutral-500 justify-start ",
  };

  // sm, lg, xl
  const sizes: Record<string, string> = {
    sm: "text-sm py-0.5 px-2",
    lg: "text-lg p-1 px-2",
    xl: "text-xl p-1 px-2",
  };

  // Function to set styles depending on the preset.
  function setVariant(variant) {
    switch (variant) {
      case "primary":
        return classes.primary;
      case "secondary":
        return classes.secondary;
      case "danger":
        return classes.danger;
      case "danger-secondary":
        return classes.dangerSecondary;
      case "success":
        return classes.success;
      case "success-secondary":
        return classes.successSecondary;
      case "neutral":
        return classes.neutral;
      case "neutral-secondary":
        return classes.neutralSecondary;
      case "text":
        return classes.text;
      default:
        return classes.primary;
    }
  }

  // Sets the size.
  function setSize(size) {
    switch (size) {
      case "sm":
        return sizes.sm;
      case "lg":
        return sizes.lg;
      case "xl":
        return sizes.xl;
      default:
        return sizes.lg;
    }
  }

  // Depending if disabled or not, returns a button who is disabled or not
  return disabled ? (
    <button
      className={`${setSize(size)} ${setVariant(variant)}
        rounded-md cursor-not-allowed opacity-50 antialiased ${className}`}
      disabled
      {...props}
    >
      {children}
    </button>
  ) : (
    <button
      className={`${setSize(size)} ${setVariant(variant)}
        rounded-md cursor-pointer hover:scale-105 duration-100 antialiased ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

import React, { ReactNode } from "react";

interface props {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtl"
    | "content"
    | "muted"
    | "code";
  className?: string;
  children: ReactNode;
}

const Typography = ({ variant, className, children }: props) => {
  // TODO: Add a separation with variants and sizing.

  const styles: Record<string, string> = {
    h1: "text-4xl font-bold antialiased dark:text-white",
    h2: "text-3xl font-bold antialiased dark:text-white",
    h3: "text-xl font-bold antialiased dark:text-white",
    h4: "text-lg font-bold antialiased dark:text-white",
    h5: "text-base font-bold antialiased dark:text-white",
    h6: "text-sm font-bold antialiased dark:text-white",
    subtl: "text-base font-semibold antialiased dark:text-white",
    content: "text-base font-normal antialiased dark:text-white",
    muted:
      "text-base font-normal text-neutral-500 dark:text-neutral-300 antialiased",
    code: "font-mono text-base antialiased bg-neutral-500/70 p-[3px] pl-[8px] rounded-xs dark:text-white",
  };

  switch (variant) {
    case "h1":
      return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${styles.h2} ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`${styles.h3} ${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`${styles.h4} ${className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${styles.h5} ${className}`}>{children}</h5>;
    case "h6":
      return <h6 className={`${styles.h6} ${className}`}>{children}</h6>;
    case "subtl":
      return <p className={`${styles.subtl} ${className}`}>{children}</p>;
    case "content":
      return <p className={`${styles.content} ${className}`}>{children}</p>;
    case "muted":
      return <p className={`${styles.muted} ${className}`}>{children}</p>;
    case "code":
      return <code className={`${styles.code} ${className}`}>{children}</code>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;

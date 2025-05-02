import React, { ReactNode } from 'react'

interface props {
  children: ReactNode, // for the plain text inside the button.
  size: 'sm' | 'lg' | 'xl', // stablishes the size of the button.
  style: 'primary' | 'secondary' | 'danger' | 'danger-secondary' | 'sucess' | 'sucess-secondary' | 'neutral' | 'neutral-secondary', // one of the presetted styles.
  disabled: boolean, // if is disabled or not and to apply the "disabled" styles and accesibility
  fn: Function, // the function that will be executed when it will be clicked

  className: string, // for the extra styles.
}

export const Button = ({ children, size, style, disabled, fn, className }: props) => {
  
    // Possible styles:
    // primary, secondary, danger, danger-secondary, sucess, success-secondary
    const classes: Record<string, string> = {
      primary: "bg-blue-500 border-blue-500 dark:bg-blue-700 dark:border-blue-700",
      secondary: "border-2 border-blue-500 bg-blue-500/70 dark:border-blue-700 dark:bg-blue-700/30",
      danger: "bg-red-500 dark:bg-red-700 ",
      dangerSecondary: "border-2 border-red-500 bg-red-500/70 dark:border-red-700 dark:bg-red-700/30",
      success: "bg-green-500 dark:bg-green-700",
      successSecondary: "border-2 border-green-500 bg-green-500/70 dark:border-green-700 dark:bg-green-700/30",
      neutral: "bg-neutral-500 dark:bg-neutral-200 dark:text-neutral-900 font-medium",
      neutralSecondary: "border-2 border-neutral-500 bg-neutral-200/70 dark:border-neutral-200 dark:bg-neutral-200/70 dark:text-neutral-900 font-medium"
    }

    // sm, lg, xl
    const sizes: Record<string, string> = {
      sm: "text-sm py-0.5 px-2",
      lg: "text-lg p-1 px-2",
      xl: "text-xl p-1 px-2"
    }

    // Function to set styles depending on the preset.
    function setStyle(style) {
      switch (style) {
        case "primary": return classes.primary;
        case "secondary": return classes.secondary;
        case "danger": return classes.danger;
        case "danger-secondary": return classes.dangerSecondary;
        case "success": return classes.success;
        case "success-secondary": return classes.successSecondary;
        case "neutral": return classes.neutral;
        case "neutral-secondary": return classes.neutralSecondary;
        default: return classes.primary;
      }
    }

    // Sets the size.
    function setSize(size) {
      switch (size) {
        case "sm": return sizes.sm
        case "lg": return sizes.lg
        case "xl": return sizes.xl
        default: return sizes.lg
      }
    }

    // Depending if disabled or not, returns a button who is disabled or not
    return disabled ? 
    
    (<button 
      className={`${setSize(size)} ${setStyle(style)} 
        rounded-md cursor-not-allowed opacity-50 antialiased ${className}`} 
        disabled>{children}</button>) 
        : 
        (<button 
        className={`${setSize(size)} ${setStyle(style)} 
        rounded-md cursor-pointer hover:scale-105 duration-100 antialiased ${className}`}
        onClick={() => fn()}
        >{children}</button>)
  
}
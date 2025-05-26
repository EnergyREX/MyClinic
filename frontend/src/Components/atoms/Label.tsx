import React, { ReactNode } from 'react'

interface props {
  children: ReactNode,
  htmlFor?: string,
  className?: string,
  isRequired?: boolean,
}

const Label = ({children, htmlFor, className, isRequired}: props) => {

  const requiredAsterisk: string = "text-red-600 font-black ml-0.5" 

  if (isRequired) {
    return (
      <label htmlFor={htmlFor} className={`dark:text-white mb-0.5 ${className}`}>
        {children}
        <span className={requiredAsterisk}>*</span>
      </label>
    )
  } else {
      return (
      <label htmlFor={htmlFor} className={`${className}`}>{children}</label>
  )
  }

}

export default Label
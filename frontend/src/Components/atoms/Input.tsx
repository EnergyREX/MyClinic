import React from 'react'

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
}

const Input = ({ className, ...props }: props) => {

  const styles: string = "border-1 p-1 rounded-md"

  return (
    <input className={`${styles} ${className}`} {...props} />
  )
}

export default Input
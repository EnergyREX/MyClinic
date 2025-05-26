import React from 'react'

const Input = ({ className, ...props }) => {

  const styles: string = "border-1 p-1 rounded-md"

  return (
    <input className={`${styles} ${className}`} {...props} />
  )
}

export default Input
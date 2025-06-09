import React, { ReactNode } from 'react'

interface props {
  children: ReactNode
  className?: string
}

const Card = ({children, className}: props) => {

  const classes: string = "w-xs bg-neutral-900"

  return (
    <div className={`${classes} ${className} my-2 rounded-md`}>
      {children}
    </div>
  )
}

export default Card
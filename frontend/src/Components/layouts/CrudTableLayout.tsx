import React, { ReactNode } from 'react'

interface props {
  children: ReactNode
  className?: string
}

const CrudTableLayout = ({ children, className }: props) => {
  return (
    <div className={`grid grid-cols-6 grid-rows-12 lg:grid-cols-12 dark:bg-neutral-700 dark:text-white min-h-dvh min-w-dvh ${className}`}>
      {children}
    </div>
  )
}

export default CrudTableLayout
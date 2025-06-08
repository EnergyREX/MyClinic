import React, { ReactNode } from 'react'

interface props {
  children: ReactNode
}

const SidenavFooter = ({children}: props) => {

  const classes: string = ""

  return (
    <div className={`${classes}`}>
      {children}
    </div>
  )
}

export default SidenavFooter
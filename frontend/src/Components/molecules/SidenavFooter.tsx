import React, { ReactNode } from 'react'

interface props {
  children: ReactNode
}

const SidenavFooter = ({children}: props) => {
  return (
    <div>{children}</div>
  )
}

export default SidenavFooter
import React, { ReactNode } from 'react'

interface props {
  children: ReactNode
}

const SidenavHeader = ({children}: props) => {
  return (
    <div>{children}</div>
  )
}

export default SidenavHeader
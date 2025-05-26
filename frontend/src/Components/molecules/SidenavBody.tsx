import React, { ReactNode } from 'react'

interface props {
  children: ReactNode;
}

const SidenavBody = ({children}: props) => {
  return (
    <div>{children}</div>
  )
}

export default SidenavBody
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Cell = ({children}: Props) => {
  return (
    <td>{children}</td>
  )
}

export default Cell
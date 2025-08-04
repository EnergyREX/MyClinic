import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}


const HeaderCell = ({children}: Props) => {

  const classes = 'pr-1 pl-1 border-1 rounded-md'

  return (
    <th className={`${classes}`}>{children}</th>
  )
}

export default HeaderCell
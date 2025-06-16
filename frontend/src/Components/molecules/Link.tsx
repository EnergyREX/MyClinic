import React, { ReactNode, useState } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import Typography from '../atoms/Typography'

interface props extends LinkProps {
  to: string
  className?: string,
  children?: ReactNode,
  label: string
}

const Link = ({ className, children, label, to, ...props }: props) => {

  const [ isPage, setIsPage ] = useState(false)

    const classes: Record<string, string> = {
      default: "flex gap-1 align-middle p-1 m-1 rounded-md hover:bg-neutral-700 hover:text-white ease-in duration-100 align-middle",
      active: "flex gap-1 align-middle p-1 m-1 rounded-md bg-neutral-700 ease-in duration-100",
    }

  function checkIsPage () {
    if (location.pathname == to) {
      return classes.active
    } else {
      return classes.default
    }   
  }

  return (
    <RouterLink to={to} {...props} 
    className={checkIsPage()}>
      {children}
      <Typography variant='h3'>{label}</Typography>
    </RouterLink>
  )
}

export default Link
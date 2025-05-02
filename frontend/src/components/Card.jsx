import React from 'react'

const Card = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export const CardHeader = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export const CardContent = ({children}) => {
  return (
    <div className='flex'>{children}</div>
  )
}

export const CardFooter = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Card
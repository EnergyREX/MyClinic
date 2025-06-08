import React, { InputHTMLAttributes, ReactNode } from 'react'

// The value for the checkbox.
// Children for 
interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = ({label, ...props}: props) => {

  const classes: string = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500"

  // Depending on if it has got a label (usually will have.)
  return label ? 
  (
    <>
    <input className={`${classes}`} type='checkbox' {...props}></input>
    <label>{label}</label>
    </>
  ) :
  (
    <>
    <input className={`${classes}`} type='checkbox' {...props}></input>
    </>
  )
}

export default Checkbox
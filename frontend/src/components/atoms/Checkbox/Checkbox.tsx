import React, { ReactNode } from 'react'

// The value for the checkbox.
// Children for 
interface props {
  name: string, // name property and id.
  val: string, // value of the checkbox
  hasLabel: boolean, // if the checkbox has a label
  children: ReactNode, // if has a label, sets its content
  size: 'sm' | 'lg' | 'xl'
}

const Checkbox = ({name, val, hasLabel, children}: props) => {
  

  

  // Depending on if it has got a label (usually will have.)
  return hasLabel ? 
  (
    <>
    <input type='checkbox' id={name} name={name} value={val}></input>
    <label htmlFor={name}>{children}</label>
    </>
  ) :
  (
    <>
    <input type='checkbox' id={name} name={name} value={val}></input>
    </>
  )
}

export default Checkbox
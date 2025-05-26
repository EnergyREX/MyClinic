import React, { InputHTMLAttributes, ReactNode } from 'react'

// The value for the checkbox.
// Children for 
interface props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;            // name del input (y también usado como id)
  val: string;             // value del checkbox
  hasLabel: boolean;       // si el checkbox tiene una etiqueta asociada
  children?: ReactNode;    // contenido de la etiqueta, opcional si hasLabel = false
  size?: 'sm' | 'lg' | 'xl'; // tamaño opcional con valores predefinidos
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
import React from 'react'

const Input = ({id, type, placeholder}) => {
  if (type == "text" || type == "number") {
    return (
      <input className='border-2 border-neutral-600 focus:border-blue-500 dark:focus:border-neutral-100 p-0.5 rounded-sm' 
      type={type} name={id} id={id} placeholder={placeholder} />
    )
  } else {
    return (
      <input className='border-2 border-neutral-600 focus:border-blue-500 dark:focus:border-neutral-100 p-0.5 rounded-sm' 
      type={type} name={id} id={id} placeholder={placeholder} />
    )
  }
}

export default Input
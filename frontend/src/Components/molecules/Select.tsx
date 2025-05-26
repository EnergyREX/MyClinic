import React, { ReactNode, useState } from 'react'
import { Button } from '../atoms/Button'
import { ChevronDown } from 'lucide-react'
import Option from '../atoms/Option'

interface props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
  label: string
}

const Select = ({ children, label, ...props }: props) => {

  const [ isOpen, setIsOpen ] = useState(false)

  function openDropdown () {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <div>
    <button onClick={openDropdown} className="inline-flex items-center border-1 p-1 rounded-md">
      <span className="flex items-center gap-1">
        {label} <ChevronDown />
      </span>
    </button>
          
        <div
          className={`
            absolute mt-1 w-40 bg-white border rounded-md shadow-lg z-10 flex flex-col
            dark:bg-neutral-500 border-neutral-700
            transition-all duration-100 ease-out
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            {children}
      </div> 
    

      
      </div>
  )
}

export default Select
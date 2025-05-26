import { EllipsisVertical, Option } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Dropdown = ({children, ...props}: props) => {

  const [ isOpen, setIsOpen ] = useState(false)

  function openDropdown () {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <div >
    <button 
    onClick={openDropdown}
    className='hover:cursor-pointer hover:bg-neutral-500 rounded-md p-1'>
      <EllipsisVertical />
    </button>

      <div
          className={`
            absolute mt-1 w-40 bg-white border rounded-md shadow-lg z-10 flex flex-col
            dark:bg-neutral-500 border-neutral-700 p-1
            transition-all duration-100 ease-out
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
        {children}
      </div> 
    </div>
  )
}

export default Dropdown
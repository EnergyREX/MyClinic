import React from 'react'

const Modal = ({ children, id }) => {
  return (
    <dialog 
    id={id}
    className='fixed inset-0 bg-gray-500/75 transition-opacitylex-col justify-center dark:bg-neutral-800 dark:text-white p-3 duration-200 rounded-md'
    >
      {children}
    </dialog>
  )
}


export const ModalHeader = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export const ModalContent = ({ children }) => {
  return (
    <div className='flex justify-center px-5'>
      {children}
    </div>
  )
}

export const ModalFooter = ({ children }) => {
  return (
    <div className='flex justify-end'>
      {children}
    </div>
  )
}

export default Modal
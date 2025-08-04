import React, { ReactNode } from 'react'

interface props {
  children: ReactNode;
  message: string;
}

export const Tooltip = ( { children, message }: props ) => {

  return (
    <div className='baseClass'>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{message}</TooltipContent>
    </div>
  )
}

interface TriggerProps {
  children: ReactNode;
}

export const TooltipTrigger = ({ children }: TriggerProps ) => {

  const baseClasses: string = ""

  return (
    <div className={baseClasses}>Tooltip</div>
  )
}


interface TriggerProps {
  children: ReactNode;
}

export const TooltipContent = ({ children }: TriggerProps ) => {

  const baseClasses: string = ""

  return (
    <div className={baseClasses}>Tooltip</div>
  )
}


export default Tooltip
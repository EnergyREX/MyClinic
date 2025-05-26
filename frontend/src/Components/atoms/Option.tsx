import { Check } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

interface props {
  children: ReactNode
}

const Option = ({children}: props) => {

  const [ isSelected, setIsSelected ] = useState(false)

  function handleClick () {
    if (!isSelected) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }

  if (isSelected) {
    return (<div className='inline-flex' onClick={handleClick}><Check /> {children}</div>)
  } else {
    return (
    <div className='inline-flex' onClick={handleClick}>{children}</div>
  )
  }


}

export default Option
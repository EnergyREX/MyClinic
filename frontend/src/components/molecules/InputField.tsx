import React from 'react'
import Label from '../atoms/Label'
import Input from '../atoms/Input'

const InputField = ({ label, name, ...props }) => {
  return (
    <div className='flex flex-col gap-1'>
      <Label>{label}</Label>
      <Input name={name} {...props} />
    </div>
  )
}

export default InputField
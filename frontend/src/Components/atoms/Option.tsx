import { Check } from 'lucide-react'
import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Option = forwardRef<HTMLInputElement, Props>(({ label, checked, onChange, ...props }, ref) => {
  return (
    <label
      className='flex flex-row items-center p-1 m-1 rounded-md gap-2
                 hover:bg-neutral-600 hover:cursor-pointer'
    >
      {/* Icon */}
      <span className="w-4 h-4 flex items-center justify-center">
        {checked ? <Check className="w-4 h-4" /> : <span className="w-4 h-4" />}
      </span>

      {/* Text label */}
      <span>{label}</span>

      {/* Hidden Input */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        ref={ref}
        className="hidden"
        {...props}
      />
    </label>
  )
})

Option.displayName = 'Option'

export default Option

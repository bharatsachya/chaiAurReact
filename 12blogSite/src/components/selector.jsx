import React, { forwardRef } from 'react'
import { forwardRef } from 'react'
import { useId } from '@reach/auto-id'
function Selector({
    options,
    label,
    className="",
    ...props
},ref) {
    const id = useId()
  return (
    <div>
        {label&& <label className='inline-block mb-1 pl-1' htmlFor={id}>
         {label}
            </label>}
        <select {...props} className={`${className} `} ref={ref}  id={id} >
            {options?.map((option)=>(
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Selector)
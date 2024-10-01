import React, { useId } from 'react'
import { forwardRef } from 'react'

const Input = forwardRef(
    function Input({
        label,
        type='text',
        className = "",
        ...props
    },ref)
    {
        const id  = useId()
        return <>
           {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>             
            {label}
            </label>}
            <input type={type} 
            className={`px-4 py-2 border border-gray-300 rounded-md w-full ${className}`}
            ref={ref}
            {...props}
            />
           Test
        </>
    }
)

export default Input
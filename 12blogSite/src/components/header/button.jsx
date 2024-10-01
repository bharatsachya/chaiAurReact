import React from 'react'

function button({
    children,
    type='button',
    className='',
    bgColor='bg-blue-600',
    textColor='text-white',
    ...props
}) {
  return (
    <div>
        <button
            type={type}
            className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    </div>
  )
}

export default button
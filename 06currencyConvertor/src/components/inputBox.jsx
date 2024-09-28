import React from 'react'

function InputBox(label,amount,onAmountChange,onCurrencyChange,currencyOption=[],selectCurrency,amountDisable=false,currencyDisabled=false,className="") {
  return (
    <>
       <div className={`bg-grey-100 p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
          <label className='text-black/40 mb-2 inline-block'>
            {label}
          </label>
        </div>
        <input type="number" placeholder='Amount' className='outline-none w-full bg-transparent py-1.5'/>
       </div>
    </>
  )
}

export default InputBox
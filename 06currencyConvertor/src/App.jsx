import React from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  return (
    <>
      <div className='text-4xl mx-auto max-w-full  text-center my-auto bg-orange-300 rounded-lg' >
        Hello omd
        <useCurrencyInfo/>
      </div>
      
    </>
  )
}

export default App

import React, { useState, useEffect, useCallback,useRef } from 'react';

const YourComponent = () => {
  const [password, setPassword] = useState('');
  const [charAllowed, setCharAllowed] = useState(true);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [length, setLength] = useState(8);

  const passwordGenerator = useCallback(() => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numbersAllowed) {
      characters += '0123456789';
    }
    if (charAllowed) {
      characters += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    }
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  }, [length, charAllowed, numbersAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator,numbersAllowed,charAllowed,length]);

  const copyPasswordToClipboard = () => {
    passwordref.current.select(); 
    passwordref.current.setSelectionRange(0, 2);
    window.navigator.clipboard.writeText(password);
  }

  const passwordref = useRef(null);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-16 px-4 shadow-md rounded-lg text-orange-500 bg-gray-800 text-2xl">
        <h1 className="text-orange text-center p-2 text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3 p-4">
          <input type="text" value={password} placeholder="password" className="outline-none w-full py-1 px-3 rounded-l-lg" readOnly ref={passwordref} />
          
          <button className="bg-orange-500 text-white px-3 py-1 rounded-r-lg" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-lg gap-x-2 justify-center p-2">
          <input type="range" min={6} max={50} value={length} onChange={(e) => setLength(e.target.value)} className="cursor-pointer" />
          <label>Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
            placeholder="number"
          />
          number
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            placeholder="character"
          />
          character
        </div>
      </div>
    </>
  );
};

export default YourComponent;

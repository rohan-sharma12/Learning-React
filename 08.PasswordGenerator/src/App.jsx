import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "~`!@#$%^&*()_<|{}>?"

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)
    }

   ,[length, numberAllowed, charAllowed, setPassword])



  return (
    <>
      <h1 className='text-4xl text-center text-white font-semibold font-sans '>Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
        <input
          type="value"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly>
        </input>

        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>
        
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={40}
            value={length}
            className='cursor-pointer'            
            onChange={(e) => setLength(e.target.value)  }
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}>
              </input>
              <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}>
              </input>
              <label htmlFor="charInput">Spcial Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

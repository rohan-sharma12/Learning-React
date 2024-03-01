import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0); 

  const addValue = () => {
    setCounter(counter+1);
  }

  const decreaseValue = () => {
    setCounter(counter-1);
  }


  return (
    <>
    <p>Counter: {counter}</p>
    <br></br>
     <button onClick={addValue}>Increase Value</button>
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App

import {useState} from 'react'

function App() {

const [color, setColor] = useState("violet");
  return (

    <div className='h-screen w-full duration-200' style={{ backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

          <button onClick={ () => setColor("Red")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={ () => setColor("Green")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={ () => setColor("Violet")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Violet"}}>Violet</button>
          <button onClick={ () => setColor("Black")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Black"}}>Black</button>
          <button onClick={ () => setColor("Olive")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Olive"}}>Olive</button>
          <button onClick={ () => setColor("SkyBlue")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "SkyBlue"}}>SkyBlue</button>
          <button onClick={ () => setColor("Orange")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={ () => setColor("Blue")} className='outline-none px-3.5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "Blue"}}>Blue</button>
        </div>
      </div>
    </div>

   
  )
}

export default App

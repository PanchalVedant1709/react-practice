import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10) //hook
 

  const addValue = ()=>{
    if(counter==20)
    {
      alert("Maximum limit is 20")
    }
    else{
      setCounter(counter + 1)    
    }
  }

  const remValue = ()=>{
    if(counter==0){
      alert("Value won't go in negative")
    }
    else{
      setCounter(counter-1)
    }
  }

  return (
    <>
     
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <div className="btncls">
      <button onClick={addValue}>Increment by 1</button>
      <button onClick={remValue}>Decrement by 1</button>   
      </div>
      </>
  )
}

export default App

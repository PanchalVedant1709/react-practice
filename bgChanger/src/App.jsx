import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='main' style={{backgroundColor: color}}>
      

      <div className='bottomBararea'>
        <div className="bottomBar">
          <button onClick={()=>setColor("red")} style={{backgroundColor: 'red', color: 'whitesmoke'}}>red</button>
          <button onClick={()=>setColor("green")} style={{backgroundColor: 'green', color: 'whitesmoke'}}>green</button>
          <button onClick={()=>setColor("blue")} style={{backgroundColor: 'blue', color: 'whitesmoke'}}>blue</button>
          <button onClick={()=>setColor("olive")} style={{backgroundColor: 'olive', color: 'whitesmoke'}}>olive</button>
          <button onClick={()=>setColor("grey")} style={{backgroundColor: 'grey', color: 'whitesmoke'}}>grey</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor: 'yellow'}}>yellow</button>
          <button onClick={()=>setColor("pink")} style={{backgroundColor: 'pink'}}>pink</button>
          <button onClick={()=>setColor("purple")} style={{backgroundColor: 'purple'}}>purple</button>
          <button onClick={()=>setColor("lavender")} style={{backgroundColor: 'lavender'}}>lavender</button>
          <button onClick={()=>setColor("white")} style={{backgroundColor: 'white'}}>white</button>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default App

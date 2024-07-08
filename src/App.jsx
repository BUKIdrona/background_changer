import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ImgMediaCard from './ImgMediaCard'

function App() {
   
  const [color, setColor] = useState("olive")

  // const changeColor = (green)=>{
  //   setColor(green)
  // }

  return (
    <div className='w-full h-screen bg-orange-400 m-4 p-4' style ={{backgroundColor: color}}>
      <div className=' bg-white w-full rounded-lg h-16  bottom-28 flex items-center justify-evenly text-black m-4 p-4'>
        <button type='click' onClick={()=>{setColor("blue")}} className='w-24 m-4 p-4 bg-blue-600 rounded-full text-white'>Blue</button>
        <button type='click' onClick={()=>{setColor("red")}} className='w-24 m-4 p-4 bg-red-600 rounded-full text-white'>Red</button>
        <button type='click' onClick={()=>{setColor("yellow")}} className='w-24 m-4 p-4 bg-yellow-400 rounded-full text-white'>Yellow</button>
        <button type='click' onClick={()=>{setColor("orange")}} className='w-24 m-4 p-4 bg-orange-500 rounded-full text-white'>Orange</button>
        <button type='click' onClick={()=>{setColor("black")}} className='w-24 m-4 p-4 bg-black  rounded-full text-white'>Black</button>
        <button type='click' onClick={()=>{setColor("purple")}} className='w-24 m-4 p-4 bg-purple-600 rounded-full text-white'>Purple</button>
        <button type='click' onClick={()=>{setColor("indigo")}} className='w-24 m-4 p-4 bg-indigo-600 rounded-full text-white'>Indigo</button>
        <button type='click' onClick={()=>{setColor("violet")}} className='w-24 m-4 p-4 bg-violet-600 rounded-full text-white'>Violet</button>
        <button type='click' onClick={()=>{setColor("lime")}} className='w-24 m-4 p-4 bg-lime-500 rounded-full text-white'>Lime</button>
        
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  useEffect( () =>{
    document.body.style.backgroundColor = color
  }, [color])

  const setBG = (color) => {
    setColor(color)
  }

  return (
    <>
    <button id="btn"onClick={() => setBG(document.getElementById('btn').innerText)}>WHITE</button> &nbsp;
    <button onClick={() => setBG('blue')}>BLUE</button> &nbsp;
    
    <button onClick={() => setBG('green')}>GREEN</button> &nbsp;
    <button onClick={() => setBG('red')}>RED</button> &nbsp;
  </>
  )

}

export default App;
/*
  Although the below code perfectly fines, i just wanted to see if we can introduce useEffect hook to simulate working of it
  In this case, you need to pass an argument to the setBG function, which is the color you want to set. Directly passing the function
   (e.g., onClick={setBG}) wouldn’t allow you to specify the color because it doesn’t provide a way to pass parameters directly.
   if no params were involved we coild directly use {setBG}


   Q: WHATS THE BETTER WAY TO DO THIS? CODE STYLE...
*/

/* 
  const [color, setColor] = useState('white')
  
  const setBG = (color) => {
    document.body.style.backgroundColor = color
    setColor(color)
  }


  return (
    <>
    <button onClick={() => setBG('white')}>WHITE</button> &nbsp;
    <button onClick={() => setBG('blue')}>BLUE</button> &nbsp;
    <button onClick={() => setBG('green')}>GREEN</button> &nbsp;
    <button onClick={() => setBG('red')}>RED</button> &nbsp;
  </>
  )

*/
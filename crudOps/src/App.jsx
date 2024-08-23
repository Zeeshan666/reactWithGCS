import { useState } from 'react'
import './App.css'
import { UserProvider } from './Context/Context'
import  Home  from './Component/Home'
function App() {
  

  return (
    <UserProvider >

      <Home />

    </UserProvider>
  )
}

export default App

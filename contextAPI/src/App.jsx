import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  UserContextProvider  from './context/UserContextProvider'
import router from './Routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
       <RouterProvider router = {router} />
    </UserContextProvider>
  )
}

export default App

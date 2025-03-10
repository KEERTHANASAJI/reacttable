import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Table from './assets/components/Tableget'
import { Route, Routes } from 'react-router-dom'
import Front from './assets/components/front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
    
     <Routes>
      <Route path='/table' element={<Table/>}/>
      <Route path='/f' element={  <Front/>}/>
     </Routes>
      
    </>
  )
}

export default App

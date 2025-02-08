import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  const [theme,setTheme]=useState("dark")
  return (
    <div className={`app-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App

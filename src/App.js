import React from 'react'
import Navbar from './components/nav'
import SayHi from './components/SayHi';
import { Outlet } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div >
        <Outlet />
    </div>
  )
}

export default App

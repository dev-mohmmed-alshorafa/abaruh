import React from 'react'
import Navbar from './components/nav'
import SayHi from './components/SayHi'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'

import Protect from './components/protect/Protect'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Verefiy from './Pages/Verefiy'
import { useDispatch } from 'react-redux'
import { actions } from './Redux'
function App() {
  const dispatch = useDispatch()

  const showForm = useSelector((state) => state.showForm)
  return (
    <div style={{height:showForm !== 0?'100vh':'auto',overflow:showForm !== 0?'hidden':'auto'}} className='app'>
      <Protect />
      <Outlet />
      {showForm !== 0 && (
        <div className="show-forms">
          {showForm !== 0 && (
            <img
              onClick={() => {
                dispatch(actions.setShowForm(0))
              }}
              className="back-f"
              src="./back.png"
              alt=""
            />
          )}
          {showForm === 1 ? (
            <SignUp />
          ) : showForm === 2 ? (
            <Login />
          ) : showForm === 2 ? (
            <Verefiy />
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  )
}

export default App

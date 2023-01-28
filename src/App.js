import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import Protect from './components/protect/Protect'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Verefiy from './Pages/Verefiy'
import { useDispatch } from 'react-redux'
import { actions } from './Redux'
import { Box } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const dispatch = useDispatch()

  const showForm = useSelector((state) => state.showForm)
  const lng = useSelector((e) => e.lng)
  return (
    <Box
      dir={lng === 'en' ? 'ltr' : 'rtl'}
      sx={{
        height: showForm !== 0 ? '100vh' : 'auto',
        overflow: showForm !== 0 ? 'hidden' : 'auto',
      }}
      className="app"
    >
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
    </Box>
  )
}

export default App

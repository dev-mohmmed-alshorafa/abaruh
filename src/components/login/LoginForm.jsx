import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { actions } from '../../Redux'
import JwtService from '../../services/TokenServices'
import { useDispatch } from 'react-redux'

function LoginForm({setIsLoading}) {
  const i = {
    phoneNumber: '',
    password: '',
  }
  const dispatch = useDispatch()

  const [login, setLogin] = useState(i)
  const handelLogin = (e) => {
    setIsLoading(true)
    e.preventDefault()
    Apiservices.post('/auth/login', login).then((res) => {
      if (res.data.token) {
        JwtService.setToken( res.data.token)
        dispatch(actions.protect(res.data.data))
        dispatch(actions.setShowForm(0))
        setLogin(i)
        setIsLoading(false)
      }
    })
  }
  return (
    <>
      <form action="">
        <input
          placeholder="Phone Number"
          value={login.phoneNumber}
          onChange={(e) => setLogin({ ...login, phoneNumber: e.target.value })}
          type="text"
        />
        <input
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          placeholder="Password"
          type="password"
        />
        <span>Forget Password ?</span>
        <button onClick={handelLogin}>LOGIN</button>
      </form>
    </>
  )
}

export default LoginForm

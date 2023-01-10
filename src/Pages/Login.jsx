import React from 'react'
import '../components/login/login.css'
import LoginForm from '../components/login/LoginForm'
import Or from '../components/login/Or'
import GFbtns from '../components/login/GFbtns'
import SignUpNow from '../components/login/SignUpNow'
import Example from '../components/signup/SelectNum'


function Login() {

  return (
    <div className="login">
      <img className="login-logo" src="./icons/logo.png" alt="" />
     <LoginForm/>
     <Or/>
      <GFbtns/>
<SignUpNow/>
    </div>
  )
}

export default Login

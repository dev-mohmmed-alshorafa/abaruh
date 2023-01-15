import React, { useState } from 'react'
import '../components/login/login.css'
import LoginForm from '../components/login/LoginForm'
import Or from '../components/login/Or'
import GFbtns from '../components/login/GFbtns'
import SignUpNow from '../components/login/SignUpNow'
import Example from '../components/signup/SelectNum'
import Loading from '../components/signLoading'


function Login() {
  const [isLoading,setIsLoading]=useState(false)

  return (
    <div className="login">
      <img className="login-logo" src="./icons/logo.png" alt="" />
     <LoginForm setIsLoading={setIsLoading}/>
     <Or/>
      <GFbtns/>
<SignUpNow/>
{isLoading && <Loading/>
}
    </div>
  )
}

export default Login

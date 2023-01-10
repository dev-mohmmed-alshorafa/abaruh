import React, { useState } from 'react'
import '../components/signup/signup.css'
import SelectNum from '../components/signup/SelectNum'
import Apiservices from '../services/ApiServices'
import JwtService from '../services/TokenServices'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'
function SignUp() {
  const i = {
    name: '',
    phoneNumber: '',
    password: '',
    email: '',
  }
  const dispatch = useDispatch()

  const [signup, setSignup] = useState(i)
  const handelSignUp = (e) => {
    e.preventDefault()
    Apiservices.post('/auth/register', signup).then((res) => {
      if (res.data.token) {
        JwtService.setToken( res.data.token)
        dispatch(actions.protect(res.data.data))
        dispatch(actions.setShowForm(0))
        setSignup(i)
      }
    })
  }
  return (
    <div className="signup">
      <img className="signup-logo" src="./icons/logo.png" alt="" />
      <form action="">
        <input
          placeholder="Name"
          value={signup.name}
          onChange={(e) => setSignup({ ...signup, name: e.target.value })}
          type="text"
        />
        <div className="phone-num">
          <SelectNum />
          <input
            value={signup.phoneNumber}
            onChange={(e) =>
              setSignup({ ...signup, phoneNumber: e.target.value })
            }
            placeholder="Phone Number"
            type="text"
          />
        </div>
        <input
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          placeholder="Email (optional)"
          type="text"
        />
        <input
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          placeholder="Password"
          type="password"
        />
        <input placeholder="Confirm Password" type="password" />
        <div className="tearams">
          <input placeholder="Name" required type="checkbox" name="" id="" />
          <p>
            I have read and understan <span>Teams and Conditions</span>{' '}
          </p>
        </div>
        <button onClick={handelSignUp} className="signup-btn">
          SIGNUP{' '}
        </button>
      </form>
    </div>
  )
}

export default SignUp

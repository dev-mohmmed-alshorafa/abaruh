import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'

function GFbtns() {
  const [a, setA] = useState('')
  const loginWithGoogle = () => {
    Apiservices.get('/auth').then((res) => setA(res.data))
  }
  return (
    <div className="g-f-btns">
      <button onClick={loginWithGoogle}>
        <img src="./icons/google.png" alt="" />
        <p>Continue With Google </p>
      </button>

      <button>
        <img src="./icons/facebook.png" alt="" />
        <p>Continue With Facebook </p>
      </button>
    </div>
  )
}

export default GFbtns

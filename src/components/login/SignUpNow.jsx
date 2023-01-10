import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
function SignUpNow() {
  const dispatch = useDispatch()

  return (
    <div className="signup-now">
      <p>Don't have account?</p>
      <button
        onClick={() => {
          dispatch(actions.setShowForm(1))
        }}
      >
        SIGNUP NOW !
      </button>
    </div>
  )
}

export default SignUpNow

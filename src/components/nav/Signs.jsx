import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
function Signs() {
  const dispatch = useDispatch()

  return (
    <div className="signs-btns">
      <button
        onClick={() => dispatch(actions.setShowForm(1))}
        className="logout"
      >
        SignUp
      </button>
      <button
        onClick={() => dispatch(actions.setShowForm(2))}
        className="logout"
      >
        Login
      </button>
    </div>
  )
}

export default Signs

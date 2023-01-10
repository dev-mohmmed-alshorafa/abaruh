import React from 'react'
import JwtService from '../../services/TokenServices'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
function LogoutBtn() {
  const dispatch = useDispatch()

  const handelLogOut = () => {
    JwtService.destroyToken('token')
    dispatch(actions.logout())
  }
  return (
    <button onClick={handelLogOut} className="logout">
      <div></div>
      <p>logout</p> <img src="./icons/logout.png" />
    </button>
  )
}

export default LogoutBtn

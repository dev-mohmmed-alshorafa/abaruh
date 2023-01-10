import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import Apiservices from '../../services/ApiServices'
import JwtService from '../../services/TokenServices'
function Protect() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (JwtService.getToken('token')) {
      Apiservices.get('/protect').then((res) => {
        if (!res.data.msg) {
          dispatch(actions.protect(res.data))
        }
      })
    }
  }, [])

  return <div></div>
}

export default Protect

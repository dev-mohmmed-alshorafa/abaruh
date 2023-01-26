import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import Apiservices from '../../services/ApiServices'
import JwtService from '../../services/TokenServices'
function Protect() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.showIsLoadingUser(true))

    if (JwtService.getToken('token')) {
      Apiservices.get('/protect').then((res) => {
        
        if (res.data && !res.data.msg) {
          dispatch(actions.protect(res.data))
          dispatch(actions.showIsLoadingUser(false))

        }
        dispatch(actions.showIsLoadingUser(false))
      })
    } else {
      dispatch(actions.showIsLoadingUser(false))
    }
  }, [])

  return <div></div>
}

export default Protect

import React from 'react'
import JwtService from '../../services/TokenServices'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
function LogoutBtn() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  
  const handelLogOut = () => {
    JwtService.destroyToken('token')
    dispatch(actions.logout())
  }
  return (
    <button onClick={handelLogOut} className="logout">
      <div></div>
      <p>{t("logout")}</p> <img src="./icons/logout.png" />
    </button>
  )
}

export default LogoutBtn

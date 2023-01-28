import React from 'react'
import { Link } from 'react-router-dom'
import './address.css'
import { actions } from '../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
function Index() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
const lng=useSelector(e=>e.lng)
  return (
    <div className="address-header">
      <Link className="backToHome" to={'/'}>
        <img style={{transform:lng==='ar' &&"rotateY(180deg)"}} src="./back.png" alt="" />
      </Link>
      <p>{t("myaddress")}</p>
      <div
        onClick={() =>   dispatch(actions.setIsAddress (true))
        }
        to={'/addAddress'}
        className="add-address-btn"
      >
        <img src="./icons/add.png" alt="" />
      </div>
    </div>
  )
}

export default Index

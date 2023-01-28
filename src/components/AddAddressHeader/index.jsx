import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
function Index() {
  const dispatch = useDispatch()
  const isAddress = useSelector((e) => e.isAddress)
  const { t } = useTranslation()
const lng=useSelector(e=>e.lng)
  return (
    <div className="address-header">
      {!isAddress ? (
        <Link to={'/'}>
          {' '}
          <img  style={{width:'25px',transform:lng==='ar' &&"rotateY(180deg)"}} src="./back.png" alt="" />
        </Link>
      ) : (
        <div
          onClick={() => dispatch(actions.setIsAddress(false))}
          className="backToHome"
        >
          <img style={{width:'25px',transform:lng==='ar' &&"rotateY(180deg)"}} src="./back.png" alt="" />
        </div>
      )}

      <p>{t("addaddress")}</p>
      <div className="empty-div"></div>
    </div>
  )
}

export default Index

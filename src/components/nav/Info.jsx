import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from '../../Redux'
import { Box } from '@mui/material'

function Info({ user }) {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const [isOn, setIsOn] = useState(false)
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setIsOn(!isOn)
  }

  const lng=useSelector(e=>e.lng)
  return (
    <div className="info">
      <section
        style={{ gap: user && user.role === 'merchant' && '10px' }}
        className="info-t"
      >
        {user && (
          <>
            {user.role === 'merchant' && (
              <>
                <Link to={`/trader-dashboard/${user._id || user.id}`}>
                  <img src="./icons/business.png" alt="" />
                  <p>{t('info.dashboard')}</p>
                </Link>
                <Link to="/orders">
                  <img src="./icons/features.png" alt="" />
                  <p>{t('info.orders')}</p>
                </Link>
                <Link to="/myOrders">
                  <img src="./icons/order.png" alt="" />
                  <p>{t('info.myorder')}</p>
                </Link>
                {/* <Link to="/">
                  <img src="./icons/products.png" alt="" />
                  <p>{t('info.products')}</p>
                </Link> */}
                <Link to="/addresses">
                  <img src="./icons/adress.png" alt="" />
                  <p>{t('info.addresses')}</p>
                </Link>
                <Link to={`/privacy/${user._id}`}>
                  <img src="./icons/policy.png" alt="" />
                  <p>{t('info.privacy')}</p>
                </Link>
              </>
            )}
            {(user.role === 'user' || user.role === 'admin') && (
              <>
                <Link to="/myOrders">
                  <img src="./icons/order.png" alt="" />
                  <p>{t('info.myorder')}</p>
                </Link>
                <Link to="/addresses">
                  <img src="./icons/adress.png" alt="" />
                  <p>{t('info.addresses')}</p>
                </Link>
                <Link to={`/privacy/${user._id}`}>
                  <img src="./icons/policy.png" alt="" />
                  <p>{t('info.privacy')}</p>
                </Link>
              </>
            )}
            {user.role === 'factory' && (
              <>
                <Link to="/factory/orders">
                  <img src="./icons/order.png" alt="" />
                  <p>{t('info.myorder')}</p>
                </Link>
                <Link to={`/privacy/${user._id}`}>
                  <img src="./icons/policy.png" alt="" />
                  <p>{t('info.privacy')}</p>
                </Link>
              </>
            )}
          </>
        )}
        <div
          style={{ paddingTop: user && user.role === 'merchant' && '10px' }}
          className="lng"
        >
          <p>{lng ==='ar'?"العربيه":"English"}</p>
          <Box sx={{flexDirection:lng ==='ar' && 'row-reverse'}}  className="lng-btns">
            <button
              onClick={() => {
                dispatch(actions.setLng('en'))
                console.log('en');
                changeLanguage('en')
              }}
            ></button>
            <button
              onClick={() => {
                dispatch(actions.setLng('ar'))

                changeLanguage('ar')
              }}
            ></button>
            <span
              style={{ left: isOn === false ? 0 : '20px' }}
              className="span-lng"
            ></span>
          </Box>
          <p>{lng !=='ar'?"العربيه":"English"}</p>
        </div>
      </section>
    </div>
  )
}

export default Info

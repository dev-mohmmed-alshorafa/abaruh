import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Info({ user }) {
  const { t, i18n } = useTranslation()
  const [isOn, setIsOn] = useState(false)
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setIsOn(!isOn)
  }
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
                <Link to="/dashboard">
                  <img src="./icons/business.png" alt="" />
                  <p>{t('info.dashboard')}</p>
                </Link>
                <Link to="/orders">
                  <img src="./icons/features.png" alt="" />
                  <p>{t('info.orders')}</p>
                </Link>
                <Link to="/myProducts">
                  <img src="./icons/products.png" alt="" />
                  <p>{t('info.products')}</p>
                </Link>
              </>
            )}

            <Link to="/myOrders">
              <img src="./icons/order.png" alt="" />
              <p>{t('info.myorder')}</p>
            </Link>
            <Link to="/addresses">
              <img src="./icons/adress.png" alt="" />
              <p>{t('info.addresses')}</p>
            </Link>
            <Link to="/privacy">
              <img src="./icons/policy.png" alt="" />
              <p>{t('info.privacy')}</p>
            </Link>
          </>
        )}
        <div
          style={{ paddingTop: user && user.role === 'merchant' && '10px' }}
          className="lng"
        >
          <p>English</p>
          <div className="lng-btns">
            <button onClick={() => changeLanguage('en')}></button>
            <button onClick={() => changeLanguage('ar')}></button>
            <span
              style={{ left: isOn === false ? 0 : '20px' }}
              className="span-lng"
            ></span>
          </div>
          <p>العربيه</p>
        </div>
      </section>
    </div>
  )
}

export default Info

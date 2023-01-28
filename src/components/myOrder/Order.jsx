import React, { useEffect } from 'react'
import Avatar from './Avatar'
import './order.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function Order({ order }) {
  const { t } = useTranslation()
const lng=useSelector(e=>e.lng)
  return (
    <Link  className="order">
      <Avatar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '98%',
          alignItems: 'center',
        }}
      >
        <div style={{margin:lng==="en"?"0 19px 0 0":"0"}} className="order-info">
          <p className="order-name">{order.TradeName?order.TradeName:'Order'}</p>
          <p className="order-price">{order.total} SAR</p>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <p className="order-key">{t("ordernum")}</p>
          <p className="order-value">1423569</p>
          <p className="order-key">{t("date")}</p>
          <p className="order-value">{order.createdAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default Order

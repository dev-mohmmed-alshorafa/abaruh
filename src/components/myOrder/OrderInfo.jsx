import React from 'react'
import Avatar from './Avatar'
import { useTranslation } from 'react-i18next'

function OrderInfo({ order }) {
  const { t } = useTranslation()

  return (
    <div className="show-order-info">
      <div className="avatar-info">
        <Avatar />
        <section>
          <div>
            <p className="orderName">{order.merchantName || 'Order'}</p>
            <div className="order-div">
              <p>{t("ordernum")}</p>
              <span>{order.orderNumber}</span>
            </div>
            <div className="order-div">
              <p>{t("date")}</p>
              <span>{order.createdAt}</span>
            </div>
          </div>
        </section>
      </div>
      <p className="order-price-info">{order.total} SAR</p>
    </div>
  )
}

export default OrderInfo

import React, { useEffect } from 'react'
import Avatar from './Avatar'
import './order.css'
import { Link } from 'react-router-dom'
function MyOrder({ order }) {
  return (
    <Link to={`/myOrders/${order._id}`} className="order">
      <Avatar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '98%',
          alignItems: 'center',
        }}
      >
        <div className="order-info">
          <p className="order-name">{order.TradeName?order.TradeName:'Order'}</p>
          <p className="order-price">{order.total} SAR</p>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <p className="order-key">Order Number</p>
          <p className="order-value">1423569</p>
          <p className="order-key">Date</p>
          <p className="order-value">{order.createdAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default MyOrder

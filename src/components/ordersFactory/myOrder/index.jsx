import React, { useEffect } from 'react'
import Avatar from './Avatar'
import './order.css'
import { Link } from 'react-router-dom'
function OrdersFactory({ order }) {
  return (
    <Link to={`/factory/orders/${order._id}`} className="order">
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
          <p className="order-name">{'Order'}</p>
          <p className="order-price">40 SAR</p>
          <p style={{color:'orange'}} className="order-price">pindding</p>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <p className="order-key">Order Number</p>
          <p className="order-value">1423569</p>
          <p className="order-key">Date</p>
          <p className="order-value">1/1/2023</p>
        </div>
      </div>
    </Link>
  )
}

export default OrdersFactory

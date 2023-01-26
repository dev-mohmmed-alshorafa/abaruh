import React from 'react'
import Avatar from './Avatar'

function OrderInfo({ order }) {
  return (
    <div className="show-order-info">
      <div className="avatar-info">
        <Avatar />
        <section>
          <div>
            <p className="orderName"> 'Order'</p>
            <div className="order-div">
              <p>Order Number</p>
              <span>111111</span>
            </div>
            <div className="order-div">
              <p>Date</p>
              <span>1/1/2023</span>
            </div>
          </div>
        </section>
      </div>
      <p className="order-price-info">3000 SAR</p>
    </div>
  )
}

export default OrderInfo

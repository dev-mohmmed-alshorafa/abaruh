import React from 'react'
import Avatar from './Avatar'

function OrderInfo({order}) {
  
  return (
    <div className='show-order-info'>
      <div className='avatar-info'>
        <Avatar/>
        <section>
          <div>
          <p className='orderName'>{order.name}</p>
          <div className='order-div'>
          <p>Order Number</p>
          <span>{order.orderNum}</span>
          </div>
         <div className='order-div'>
         <p>Date</p>
          <span>{order.date}</span>
         </div>
          </div>
          
          
        </section>
      </div>
      <p className='order-price-info'>{order.price} SAR</p>
    </div>
  )
}

export default OrderInfo

import React from 'react'

function OrderDetailsItem({details}) {
  return (
    <div className='details-order'>
      <div className='details-order-info'>
        <p>{details.name}</p>
        <span>x{details.count}</span>
      </div>
      <p className='details-order-price'> {details.price} SAR</p>
    </div>
  )
}

export default OrderDetailsItem

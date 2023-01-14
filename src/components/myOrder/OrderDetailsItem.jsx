import React from 'react'

function OrderDetailsItem({ details }) {
  return (
    <div className="details-order">
      <div className="details-order-info">
        <p>{details.productId.name}</p>
        <span>x{details.quantity}</span>
      </div>
      <p className="details-order-price"> {details.productId.price} SAR</p>
    </div>
  )
}

export default OrderDetailsItem

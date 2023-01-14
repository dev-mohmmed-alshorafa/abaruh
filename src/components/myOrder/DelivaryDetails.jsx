import React from 'react'

function DelivaryDetails({ order }) {
  return (
    <div className="delivery">
      <p>Delivery Address</p>
      <div>
        <span>{order.address.addressName}</span>
      </div>
    </div>
  )
}

export default DelivaryDetails

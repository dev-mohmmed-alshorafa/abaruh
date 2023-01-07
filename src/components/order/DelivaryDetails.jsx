import React from 'react'

function DelivaryDetails({order}) {
  return (
    <div className='delivery'>
      <p>Delivery Address</p>
      <div>
      {
        order.deliveryAddress.map((e,i)=>
          <span key={i}>{e}</span> )
      }
      </div>
     
      
    </div>
  )
}

export default DelivaryDetails

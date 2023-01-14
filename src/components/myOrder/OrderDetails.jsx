import React from 'react'
import OrderDetailsItem from './OrderDetailsItem'

function OrderDetails({order}) {
  return (
    <div>
      <p className='details-orders-title'>Order Details</p>
      <div className='details-orders-items'>
      {
        order.product.map(e=> <OrderDetailsItem details={e} key={e._id}/> )
      }
      </div>
   
    </div>
  )
}

export default OrderDetails

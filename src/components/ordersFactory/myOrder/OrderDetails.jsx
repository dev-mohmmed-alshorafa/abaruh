import React from 'react'
import OrderDetailsItem from './OrderDetailsItem'

function OrderDetails({order}) {
  return (
    <div>
      <p className='details-orders-title'>Order Details</p>
      <div className='details-orders-items'>
      
       <OrderDetailsItem/> 
      
      </div>
   
    </div>
  )
}

export default OrderDetails

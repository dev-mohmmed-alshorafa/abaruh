import React, { useEffect, useState } from 'react'
import Order from '../components/ordersFactory/myOrder'
import OrderHeader from '../components/myOrderHedar'
import Apiservices from '../services/ApiServices'
import SmallOrders from '../components/Skeleton/SmallOrders'
function Orders() {
  const [isLoading,setIsLoading]=useState(false)
  const [orders,setOrders]=useState([{},{},{},{}])
 
 
  return (
    <div>
      <OrderHeader/>
      <div className='orders'>
        {isLoading && <SmallOrders/>}

      {
      !isLoading&& orders.map((e,i)=> <Order order={e} key={i}/> ) 
      }
      </div>
     
    </div>
  )
}

export default Orders

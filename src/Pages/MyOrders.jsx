import React, { useEffect, useState } from 'react'
import Order from '../components/myOrder'
import OrderHeader from '../components/myOrderHedar'
import Apiservices from '../services/ApiServices'
import SmallOrders from '../components/Skeleton/SmallOrders'
function Orders() {
  const [isLoading,setIsLoading]=useState(false)
  const [orders,setOrders]=useState([])
  useEffect(()=>{
    setIsLoading(true)
    Apiservices.get('/order').then(res=>{
      setIsLoading(false)   
         setOrders(res.data.data)})
  },[])
 
  return (
    <div>
      <OrderHeader/>
      <div className='orders'>
        {isLoading && <SmallOrders/>}

      {
      !isLoading&& orders.map(e=> <Order order={e} key={e._id}/> ) 
      }
      </div>
     
    </div>
  )
}

export default Orders

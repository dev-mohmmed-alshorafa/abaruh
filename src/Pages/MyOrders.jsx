import React, { useEffect, useState } from 'react'
import Order from '../components/myOrder'
import OrderHeader from '../components/myOrderHedar'
import Apiservices from '../services/ApiServices'
function Orders() {
  const [orders,setOrders]=useState([])
  useEffect(()=>{
    Apiservices.get('/order').then(res=>{
      console.log();
      setOrders(res.data.data)})
  },[])
 
  return (
    <div>
      <OrderHeader/>
      <div className='orders'>
      {
       orders.map(e=> <Order order={e} key={e._id}/> ) 
      }
      </div>
     
    </div>
  )
}

export default Orders

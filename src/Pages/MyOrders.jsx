import React, { useState } from 'react'
import Order from '../components/myOrder'
import OrderHeader from '../components/myOrderHedar'
function Orders() {
  // const [orders,setOrders]=useState([])
  const orders=[{
    id:1,
    name:'Vender Shop Name'
    ,price:2300,
    orderNum:12345678
    ,date:'01/01/2023'
  },
  {
    id:2,
    name:'Vender Shop Name'
    ,price:2300,
    orderNum:12345678
    ,date:'01/01/2023'
  },
  {
    id:3,
    name:'Vender Shop Name'
    ,price:2300,
    orderNum:12345678
    ,date:'01/01/2023'
  }]
  return (
    <div>
      <OrderHeader/>
      <div className='orders'>
      {
       orders.map(e=> <Order order={e} key={e.id}/> ) 
      }
      </div>
     
    </div>
  )
}

export default Orders

import React from 'react'
import Order from '../components/order'
import OrderHeader from '../components/orderHedar'
function Orders() {
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

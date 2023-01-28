import React from 'react'
import Order from '../myOrder/Order.jsx'

function OrdersItems() {
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
        <div className='orders'>
      {
       orders.map(e=> <Order order={e} key={e.id}/> ) 
      }
      </div>
    </div>
  )
}

export default OrdersItems

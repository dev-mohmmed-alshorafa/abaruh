import React from 'react'
import OrderInfo from '../components/myOrder/OrderInfo'
import { Link } from 'react-router-dom'
import DelivaryDetails from '../components/myOrder/DelivaryDetails'
import OrderDetails from '../components/myOrder/OrderDetails'

function Order() {
  const order={
    id:3,
    name:'Vender Shop Name'
    ,price:2300,
    orderNum:12345678
    ,date:'01/01/2023',
    deliveryAddress:[
      'Jeddah','Street 20','House 10'
    ],
    details:[
      {
        id:1,
        name: 'item 1',
        count:2,
        price:2000
      },    {
        id:2,
        name: 'item 3',
        count:4,
        price:300
      },    {
        id:3,
        name: 'item 2',
        count:2,
        price:500
      }
    ]
  }
  return (
    <div className='show-one-order'>
       <Link className='backToHome' to={'/myOrders'}>
        <img  src="./back.png" alt="" />
      </Link>
      <div className='show-one-order-details'>
      <OrderInfo order={order}/>
      <DelivaryDetails order={order}/>
      <OrderDetails order={order}/>
      </div>
      
    </div>
  )
}

export default Order

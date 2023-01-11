import React, { useState } from 'react'
import OrdersHeader from '../components/OrdersHeader'
import OrdersTabs from '../components/ordersTabs'
import Quotations from '../components/quotations-orders'
import OrdersItems from '../components/quotations-orders/OrdersItems'
import OrderState from '../components/orderState'
import { useSelector } from 'react-redux'
import NotAvailable from './NotAvailable'

function Orders() {
  const [isMove, setIsMove] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const user = useSelector((state) => state.user)

  if (!user || (user && user.role !== 'merchant')) {
    return <NotAvailable />
  }
  return (
    <div>
      <OrdersHeader setIsMove={setIsMove} isMove={isMove} />
      {!isMove && <OrdersTabs isActive={isActive} setIsActive={setIsActive} />}

      {!isMove && isActive ? (
        <OrdersItems />
      ) : !isMove && !isActive ? (
        <Quotations setIsMove={setIsMove} isMove={isMove} />
      ) : (
        <OrderState setIsMove={setIsMove} isMove={isMove} />
      )}
    </div>
  )
}

export default Orders

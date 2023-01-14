import React, { useEffect, useState } from 'react'
import OrderInfo from '../components/myOrder/OrderInfo'
import { Link } from 'react-router-dom'
import DelivaryDetails from '../components/myOrder/DelivaryDetails'
import OrderDetails from '../components/myOrder/OrderDetails'
import { useParams } from 'react-router-dom'
import Apiservices from '../services/ApiServices'
function Order() {
  const params = useParams()
  const [order, setOrder] = useState({
    name: '',
    toatal: '',
    address: '',
    product: [],
    orderNum: '',
    createdAt: '',
  })
  useEffect(() => {
    Apiservices.get(`/order/${params.id}`).then((res) => {
      console.log(res.data.data)
      setOrder(res.data.data)
    })
  }, [])
  return (
    <div className="show-one-order">
      <Link className="backToHome" to={'/myOrders'}>
        <img src="./back.png" alt="" />
      </Link>
      <div className="show-one-order-details">
        <OrderInfo order={order} />
        <DelivaryDetails order={order} />
        <OrderDetails order={order} />
      </div>
    </div>
  )
}

export default Order

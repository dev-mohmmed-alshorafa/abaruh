import React, { useEffect, useState } from 'react'
import OrderInfo from '../components/ordersFactory/myOrder/OrderInfo'
import { Link } from 'react-router-dom'
import DelivaryDetails from '../components/ordersFactory/myOrder/DelivaryDetails'
import OrderDetails from '../components/ordersFactory/myOrder/OrderDetails'
import { useParams } from 'react-router-dom'
import Apiservices from '../services/ApiServices'
import BigOrder from '../components/Skeleton/BigOrder'
function OrderFactory() {
  const params = useParams()
  const [order, setOrder] = useState({
    name: '',
    toatal: '',
    address: '',
    product: [],
    orderNum: '',
    createdAt: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {
  //   setIsLoading(true)
  //   Apiservices.get(`/order/${params.id}`).then((res) => {
  //     setOrder(res.data.data)
  //     setIsLoading(false)
  //   })
  // }, [])

  return (
    <div className="show-one-order">
      <Link className="backToHome" to={'/'}>
        <img src="./back.png" alt="" />
      </Link>
      {isLoading ? (
        <BigOrder />
      ) : (
        <div className="show-one-order-details">
          <OrderInfo order={order} />
          <OrderDetails order={order} />
        </div>
      )}
    </div>
  )
}

export default OrderFactory

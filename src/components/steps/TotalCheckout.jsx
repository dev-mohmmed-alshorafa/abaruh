import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import Apiservices from '../../services/ApiServices'
function TotalCheckout({ setIsDone, paymentWay }) {
  const total = useSelector((state) => state.total)

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.checkOutCart)
  const addressId = useSelector((state) => state.address)
  const [cartItems, setCartItems] = useState(
    cart.map((e) => {
      return {
        productId: '',
        price: '',
        quantity: '',
        total: '',
      }
    }),
  )
  useEffect(() => {
    setCartItems(
      cart.map((e) => {
        return {
          productId: e._id,
          price: e.price,
          quantity: e.quantity,
          total: e.total,
        }
      }),
    )
  }, [])

  return (
    <div className="total">
      <div className="total-text">
        <p onClick={() => console.log(cartItems)}>Total :</p>
        <p className="total-prices">{total} SAR</p>
      </div>
      <button
        onClick={() => {
          if (paymentWay) {
            console.log({
              product: cartItems,
              total: total,
              addressId: addressId,
              payment: paymentWay,
            })
            Apiservices.post('/order', {
              product: cartItems,
              total: total,
              addressId: addressId,
              payment: paymentWay,
            }).then((res) => {
              setIsDone(true)
              dispatch(actions.emptyCart())
              dispatch(actions.emptyCheckOutCart())
              dispatch(actions.zeroTotal())
            })
          }
        }}
      >
        Checkout
      </button>
    </div>
  )
}

export default TotalCheckout

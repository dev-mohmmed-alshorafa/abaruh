import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function CartItems() {
  const cart = useSelector((state) => state.cart)

  return (
    <div className="cartItems">
      {cart.map((e) => (
        <CartItem cart={cart} item={e} key={e._id} />
      ))}
    </div>
  )
}

export default CartItems

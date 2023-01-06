import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function CartItems() {
const cart=useSelector((state=>state.cart))
  return (
    <div className='cartItems'>
      {
       cart.map(e=> <CartItem item={e} key={e.id}/> ) 
      }
      
    </div>
  )
}

export default CartItems

import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import './cart.css'
import Total from './Total'
import { Link } from 'react-router-dom'
function MyCart() {
  const cart=useSelector((state=>state.cart))

  return (
    <div>
        <Link className='backToHome' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <div className='cart-content'>
      <CartItems/>
      <Total/>
      </div>
    </div>
  )
}

export default MyCart

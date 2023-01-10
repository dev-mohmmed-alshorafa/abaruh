import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import './cart.css'
import TotalCart from './TotalCart'
import { Link } from 'react-router-dom'
function MyCart() {

  return (
    <div>
        <Link className='backToHome' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <div className='cart-content'>
      <CartItems/>
      <TotalCart/>
      </div>
    </div>
  )
}

export default MyCart

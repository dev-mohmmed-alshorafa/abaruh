import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import './cart.css'
import TotalCart from './TotalCart'
import { Link } from 'react-router-dom'
function MyCart() {
const lng=useSelector(e=>e.lng)
  return (
    <div>
        <Link className='backToHome' to={'/'}>
        <img style={{transform:lng==='ar' &&"rotateY(180deg)"}}  src="./back.png" alt="" />
      </Link>
      <div className='cart-content'>
      <CartItems/>
      <TotalCart/>
      </div>
    </div>
  )
}

export default MyCart

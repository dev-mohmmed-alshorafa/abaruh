import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Cart() {
  const cart=useSelector((state=>state.cart))

  return (
    <Link to='/cart'  className='cart'>
            <img src="./icons/shopping.png" alt="" />
            {cart.length>0 &&<p className='badge'>{cart.length}</p>}
    </Link>
  )
}

export default Cart

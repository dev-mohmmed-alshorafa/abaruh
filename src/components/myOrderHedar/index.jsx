import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div className='order-header'>
       <Link className='backToHome ' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <p className='title-orders'>My Orders</p>
      <div className='empty-div-order'></div>
    </div>
  )
}

export default index

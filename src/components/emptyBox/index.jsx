import React from 'react'
import './emptyBox.css'
import { Link } from 'react-router-dom'
function index() {
  return (
    <div className='empty-box-section'>
        <Link className='backToHome' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <div className='empty-box'>
      <img src="./icons/box.png" alt="" />
      <p>your cart is empty !</p>
    </div>
    <div></div>
    </div>
   
  )
}

export default index

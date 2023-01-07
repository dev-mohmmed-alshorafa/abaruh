import React from 'react'
import { Link } from 'react-router-dom'
import './addressHeader.css'
function index() {
  return (
    <div className='address-header'>
      <Link className='backToHome' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <p>My Address</p>
      <Link to={'/addAddress'} className='add-address-btn'>
      <img  src="./icons/add.png" alt="" />
      </Link>
    </div>
  )
}

export default index

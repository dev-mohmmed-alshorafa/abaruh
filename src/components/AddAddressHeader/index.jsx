import React from 'react'
import { Link } from 'react-router-dom'
function index() {
  return (
    <div className='address-header'>
      <Link className='backToHome' to={'/addresses'}>
        <img  src="./back.png" alt="" />
      </Link>
      <p>Add Address</p>
      <div className='empty-div'>
      </div>
    </div>
  )
}

export default index

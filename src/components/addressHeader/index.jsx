import React from 'react'
import { Link } from 'react-router-dom'
import './address.css'
function index({ setIsAddress }) {
  return (
    <div className="address-header">
      <Link className="backToHome" to={'/'}>
        <img src="./back.png" alt="" />
      </Link>
      <p>My Address</p>
      <div
        onClick={() => setIsAddress(true)}
        to={'/addAddress'}
        className="add-address-btn"
      >
        <img src="./icons/add.png" alt="" />
      </div>
    </div>
  )
}

export default index

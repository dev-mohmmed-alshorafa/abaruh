import React from 'react'
import { Link } from 'react-router-dom'
function index({setIsAddress}) {
  return (
    <div className='address-header'>
      <div onClick={()=>setIsAddress(false)} className='backToHome'>
        <img  src="./back.png" alt="" />
      </div>
      <p>Add Address</p>
      <div className='empty-div'>
      </div>
    </div>
  )
}

export default index

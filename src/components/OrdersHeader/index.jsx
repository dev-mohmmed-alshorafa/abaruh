import React from 'react'
import { Link } from 'react-router-dom'

function OrdersHeader({ isMove ,setIsMove}) {
  return (
    <div className="header-add-product">
      {isMove ? (
        <p onClick={()=>setIsMove(false)}>
          {' '}
          <img src="./icons/arrowf.png" alt="" />
        </p>
      ) : (
        <Link to='/'>
          {' '}
          <img src="./icons/arrowf.png" alt="" />
        </Link>
      )}
      <p>{isMove ? 'File Name' : 'My Orders'}</p>
      <div></div>
    </div>
  )
}

export default OrdersHeader

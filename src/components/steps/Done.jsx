import React from 'react'
import { Link } from 'react-router-dom'

function Done({setIsDone}) {
  return (
    <div className='checkout-done'>
        <div className='done-div'>
          <img className='done' src="./icons/done.png" alt="" />
          <h4>Order Placed!</h4>
          <span>your order placed successfully for more details,check all orders page under profile tab.</span>
          <Link onClick={()=>setIsDone(false)} to={'/'}>
            <div></div>
            <p>Home</p>
            <img className='to-home' src="./icons/right.png" alt="" />
          </Link>
        </div>
      </div>
  )
}

export default Done

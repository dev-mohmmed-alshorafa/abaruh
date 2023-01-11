import React from 'react'
import { Link } from 'react-router-dom'

function Done({setIsDone,data}) {
  return (
    <div className='checkout-done'>
        <div className='done-div'>
          <img className='done' src="./icons/done.png" alt="" />
          <h4>{data.title}</h4>
          <span>{data.details}</span>
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

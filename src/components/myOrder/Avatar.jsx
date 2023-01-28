import React from 'react'
import { useSelector } from 'react-redux'

function Avatar() {
  const lng=useSelector(e=>e.lng)

  return (
    <div style={{margin:lng==="en"?"0 14px 0 0":"0 0 0 14px"}} className='order-avatar'>
<img src="./icons/vector.png" alt="" />    </div>
  )
}

export default Avatar

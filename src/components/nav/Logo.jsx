import React from 'react'
import { Link } from 'react-router-dom'
function Logo({isSearch}) {
  return (
    <Link style={{display:isSearch==='search'?'block':'none'}} className='logo'>
      <img src="./icons/logo.png" alt="" />
    </Link>
  )
}

export default Logo

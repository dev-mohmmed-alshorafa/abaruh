import React, { useState } from 'react'
import Caver from '../components/profile/Caver'
import ProductsProfile from '../components/profile/ProductsProfile'
import { Link } from 'react-router-dom'
function Profile() {
  const [list, setList] = useState(false)

  return (
    <div>
      <Caver list={list} setList={setList} />
      <ProductsProfile list={list} setList={setList}/>
      <Link className='back-to-home' to='/'>
        <img src="./icons/arrowf.png" alt="" />
      </Link>
    </div>
  )
}

export default Profile

import React, { useState } from 'react'
import Caver from '../components/profile/Caver'
import ProductsProfile from '../components/profile/ProductsProfile'

function Profile() {
  const [list, setList] = useState(false)

  return (
    <div>
      <Caver list={list} setList={setList} />
      <ProductsProfile list={list} setList={setList}/>
    </div>
  )
}

export default Profile

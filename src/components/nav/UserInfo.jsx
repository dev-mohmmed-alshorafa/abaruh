import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function UserInfo() {
  const user=useSelector((state=>state.user))

  return (
    <div className='user-info'>
      <div className='avatar'>
      {user.img?<><img src={user.img}/></>
      :<h2>{user.name.toUpperCase().split(' ').map(x=>x.slice(0,1)).join('')}</h2>}

      </div>
    <p>{user.name}</p>
    <span>{user.email}</span>
    </div>
  )
}

export default UserInfo

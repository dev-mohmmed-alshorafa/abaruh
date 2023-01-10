import React from 'react'
import UserInfo from './UserInfo'
import Info from './Info'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import Signs from './Signs'
function Items({ items }) {
  const user = useSelector((state) => state.user)
  return (
    <div className={items}>
      <div className="signs">
        {user ? <UserInfo user={user} /> : <Signs />}
        <Info user={user} />
      </div>
      {user && <LogoutBtn />}
    </div>
  )
}

export default Items

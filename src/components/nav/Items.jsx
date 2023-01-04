import React from 'react'
import UserInfo from './UserInfo'
import Info from './Info'
import LogoutBtn from './LogoutBtn'

function Items({items}) {

  return (
    <div className={items}>
      <div>
      <UserInfo/> 
     <Info/>
      </div>
    
<LogoutBtn/>
    </div>
  )
}

export default Items

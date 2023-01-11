import React from 'react'
import './orderTabs.css'
function OrdersTabs({isActive,setIsActive}) {
  return (
    <div  className='orders-tabs'>
      <div onClick={()=>setIsActive(false)} style={{borderBottom:!isActive &&'2px solid #3351A6'}}>
        <p style={{color:!isActive &&'#3351A6'}}>Quotations</p>
      </div>
      <div onClick={()=>setIsActive(true)} style={{borderBottom:isActive &&'2px solid #3351A6'}}>
        <p style={{color:isActive &&'#3351A6'}}>Last Orders</p>
      </div>
    </div>
  )
}

export default OrdersTabs

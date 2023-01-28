import React from 'react'
import './orderTabs.css'
import { useTranslation } from 'react-i18next'
function OrdersTabs({isActive,setIsActive}) {
  const { t } = useTranslation()

  return (
    <div  className='orders-tabs'>
      <div onClick={()=>setIsActive(false)} style={{borderBottom:!isActive &&'2px solid #3351A6'}}>
        <p style={{color:!isActive &&'#3351A6'}}>{t("quotations")}</p>
      </div>
      <div onClick={()=>setIsActive(true)} style={{borderBottom:isActive &&'2px solid #3351A6'}}>
        <p style={{color:isActive &&'#3351A6'}}>{t("lastorders")}</p>
      </div>
    </div>
  )
}

export default OrdersTabs

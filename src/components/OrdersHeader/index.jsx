import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function OrdersHeader({ isMove ,setIsMove}) {
  const { t } = useTranslation()
  const lng=useSelector(e=>e.lng)
  return (
    <div className="header-add-product">
      {isMove ? (
        <p onClick={()=>setIsMove(false)}>
         
          <img style={{transform:lng==='ar'&& 'rotateY(180deg)'}} src="./icons/arrowf.png" alt="" />
        </p>
      ) : (
        <Link to='/'>
          
          <img style={{transform:lng==='ar'&& 'rotateY(180deg)'}} src="./icons/arrowf.png" alt="" />
        </Link>
      )}
      <p>{isMove ? t('filename') : t('myorders')}</p>
      <div></div>
    </div>
  )
}

export default OrdersHeader

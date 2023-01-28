import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Index() {
  const { t } = useTranslation()

  return (
    <div className='order-header'>
       <Link className='backToHome ' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <p className='title-orders'>{t("myorders")}</p>
      <div className='empty-div-order'></div>
    </div>
  )
}

export default Index

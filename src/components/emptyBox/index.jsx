import React from 'react'
import './emptyBox.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Index() {
  const { t } = useTranslation()
  return (
    <div className='empty-box-section'>
        <Link className='backToHome' to={'/'}>
        <img  src="./back.png" alt="" />
      </Link>
      <div className='empty-box'>
      <img src="./icons/box.png" alt="" />
      <p>{t("emptycart")}</p>
    </div>
    <div></div>
    </div>
   
  )
}

export default Index

import React from 'react'
import './emptyBox.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function Index() {
  const { t } = useTranslation()
  const lng= useSelector(e=>e.lng)
  return (
    <div className='empty-box-section'>
        <Link className='backToHome' to={'/'}>
        <img style={{transform:lng==='ar' &&"rotateY(180deg)"}} src="./back.png" alt="" />
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

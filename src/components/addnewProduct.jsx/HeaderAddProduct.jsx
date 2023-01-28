import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function HeaderAddProduct({ isAddProduct, setIsAddProduct }) {
  const { t } = useTranslation()
  const lng = useSelector((e) => e.lng)
  return (
    <div className="header-add-product">
      {isAddProduct === 0 ? (
        <Link to="/">
          <img
            style={{ transform: lng === 'ar' && 'rotateY(180deg)' }}
            src="./icons/arrowf.png"
            alt=""
          />
        </Link>
      ) : (
        <img
          onClick={() => setIsAddProduct(0)}
          src="./icons/arrowf.png"
          style={{ transform: lng === 'ar' && 'rotateY(180deg)' }}
          alt=""
        />
      )}
      <p>{isAddProduct !== 2 ? t('addproduct') : t('createdesign')}</p>
      <div></div>
    </div>
  )
}

export default HeaderAddProduct

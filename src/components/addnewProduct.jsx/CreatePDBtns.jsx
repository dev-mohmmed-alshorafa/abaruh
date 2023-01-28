import React from 'react'
import { useTranslation } from 'react-i18next'

function CreatePDBtns({ setIsAddProduct }) {
  const { t } = useTranslation()

  return (
    <div className="create-product-btns">
      <button onClick={() => setIsAddProduct(2)}>
        <img src="./icons/web.png" alt="" />
        <span>{t('createdesign')}</span>
      </button>
      <button onClick={() => setIsAddProduct(1)}>
        <img src="./icons/openbox.png" alt="" />
        <span> {t('addproduct')}</span>
      </button>
    </div>
  )
}

export default CreatePDBtns

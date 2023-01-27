import React from 'react'
import { useTranslation } from 'react-i18next'

function SuccsessText() {
  const { t } = useTranslation()

  return (
    <div className='Successfuly'>
      <img src="./icons/checks.png" alt="" />
      <p>{t("addedsuccessfuly")}</p>
    </div>
  )
}

export default SuccsessText

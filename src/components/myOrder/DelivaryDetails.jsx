import React from 'react'
import { useTranslation } from 'react-i18next'

function DelivaryDetails({ order }) {
  const { t } = useTranslation()
  return (
    <div className="delivery">
      <p>{t("deliveryaddress")}</p>
      <div>
        <span>{order.address.addressName}</span>
      </div>
    </div>
  )
}

export default DelivaryDetails

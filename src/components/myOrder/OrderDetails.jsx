import React from 'react'
import OrderDetailsItem from './OrderDetailsItem'
import { useTranslation } from 'react-i18next'

function OrderDetails({order}) {
  const { t } = useTranslation()

  return (
    <div>
      <p className='details-orders-title'>{t("orderdetails")}</p>
      <div className='details-orders-items'>
      {
        order.product.map(e=> <OrderDetailsItem details={e} key={e._id}/> )
      }
      </div>
   
    </div>
  )
}

export default OrderDetails

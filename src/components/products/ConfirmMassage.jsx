import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'

function ConfirmMassage({ setIsActiveMassage, product }) {
  const dispatch = useDispatch()
  const handelConfirm = () => {
    setIsActiveMassage(false)
    dispatch(actions.emptyCheckOutCart())
    dispatch(actions.emptyCart())
    dispatch(actions.zeroTotal())
    dispatch(actions.addition(product.price))
    dispatch(actions.addToCart({ ...product, total: product.price, quantity: 1 }))
  }
  const handelCancel = () => {
    setIsActiveMassage(false)
  }
  const { t } = useTranslation()
  return (
    <div className="confirm-massage">
      <h3>{t("newcart")}</h3>
      <p>{t("msgnewcart")}</p>
      <div>
        <button onClick={handelConfirm}>{t("confirm")}</button>
        <button onClick={handelCancel}>{t("cancel")}</button>
      </div>
    </div>
  )
}

export default ConfirmMassage

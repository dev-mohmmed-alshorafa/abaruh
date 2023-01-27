import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
function TotalCart() {
  const total = useSelector((state) => state.total)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <div className="total">
      <div className="total-text">
        <p>{t("total")}</p>
        <p className="total-prices">{total} SAR</p>
      </div>
      {user ? (
        <Link to="/checkout">{t("checkout")}</Link>
      ) : (
        <button
          onClick={() => {
            dispatch(actions.setShowForm(1))
          }}
        >
          Checkout
        </button>
      )}
    </div>
  )
}

export default TotalCart

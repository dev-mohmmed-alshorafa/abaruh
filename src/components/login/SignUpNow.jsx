import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
function SignUpNow() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <div className="signup-now">
      <p>{t("haveaccount")}</p>
      <button
        onClick={() => {
          dispatch(actions.setShowForm(1))
        }}
      >
      <p>{t("signupnow")}</p>
      </button>
    </div>
  )
}

export default SignUpNow

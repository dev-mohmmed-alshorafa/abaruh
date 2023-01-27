import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
function Signs() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <div className="signs-btns">
      <button
        onClick={() => dispatch(actions.setShowForm(1))}
        className="logout"
      >
        {t('signup')}
      </button>
      <button
        onClick={() => dispatch(actions.setShowForm(2))}
        className="logout"
      >
        {t('signin')}
      </button>
    </div>
  )
}

export default Signs

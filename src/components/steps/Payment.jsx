import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Done from './Done'
import TotalCheckout from './TotalCheckout'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import Loading from '../signLoading'
import { useTranslation } from 'react-i18next'
function Payment() {
  const dispatch = useDispatch()
  const payment = useSelector((state) => state.payment)
  const [isLoding, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="payment">
      <input
        className="checkout-input"
        placeholder={t('discount')}
        type="text"
      />
      <p className="payment-text"> {t('paymentmethod')}</p>
      <div className="payment-section">
        <section
          onSubmit={(e) => {
            e.preventDefault()
          }}
          action=""
        >
          <div className="card-payment">
            <input
              type="radio"
              name="b"
              value={'mada'}
              onChange={(e) => dispatch(actions.addpayment('mada'))}
              id="mada"
            />
            <label htmlFor="mada">
              <img src="./icons/mada.png" alt="" />{' '}
            </label>{' '}
          </div>
          <div className="card-payment">
            <input
              type="radio"
              name="b"
              value={'visa'}
              onChange={(e) => {
                dispatch(actions.addpayment('visa'))
                console.log()
              }}
              id="visa"
            />
            <label htmlFor="visa">
              {' '}
              <img className="visa" src="./icons/visa.png" alt="" />{' '}
            </label>
          </div>
        </section>

        <TotalCheckout
          setIsLoading={setIsLoading}
          paymentWay={payment}
          setIsDone={setIsDone}
        />
      </div>
      {isLoding && <Loading />}
      {isDone && (
        <Done
          data={{
            title: t('orderplaced'),
            details:
            t('ordermsg'),
          }}
          setIsDone={setIsDone}
        />
      )}
    </div>
  )
}

export default Payment

import React from 'react'
import Total from '../cart/Total'
import { Link } from 'react-router-dom'
import Done from './Done'
function Payment() {
  return (
    <div className="payment">
      <input
        className="checkout-input"
        placeholder="Discount Code"
        type="text"
      />
      <p className="payment-text">Payment Method</p>
      <div className='payment-section'>
      <section
        onSubmit={(e) => {
          e.preventDefault()
        }}
        action=""
      >
        <div className='card-payment'>
          <input type="radio" name="b" id="mada" />
          <label htmlFor="mada">
            <img src="./icons/mada.png" alt="" />{' '}
          </label>{' '}
        </div>
        <div className='card-payment'>
          <input type="radio" name="b" id="visa" />
          <label htmlFor="visa">
            {' '}
            <img className='visa' src="./icons/visa.png" alt="" />{' '}
          </label>
        </div>
      </section>
      <Total/>
      </div>
     {/* <Done/> */}
    </div>
  )
}

export default Payment

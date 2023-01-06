import React from 'react'
import { useSelector } from 'react-redux'

function Total() {
  const total=useSelector((state=>state.total))

  return (
    <div className='total'>
      <div className='total-text'>
        <p>Total :</p>
        <p className='total-prices'>{total} SAR</p>
      </div>
      <button>Checkout</button>
    </div>
  )
}

export default Total

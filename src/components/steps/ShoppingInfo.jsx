import React, { useState } from 'react'

function ShoppingInfo({ setisActive }) {
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
  })
  return (
    <div className='shipping-info'>
      <p className='shipping-title'>Shipping Address</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setisActive(2)
        }}
        action=""
      >
        <div>

        <input
        placeholder='Address'
          className="checkout-input"
          value={shippingInfo.address}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, address: e.target.value })
          }
        />
        <input
                placeholder='City'

          className="checkout-input"
          value={shippingInfo.city}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, city: e.target.value })
          }
        />
                </div>

        <button className="continue">Continue</button>
      </form>
    </div>
  )
}

export default ShoppingInfo

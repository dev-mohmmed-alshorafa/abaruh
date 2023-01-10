import React, { useState } from 'react'
import PersonalInfo from '../components/steps/PersonalInfo'
import ShoppingInfo from '../components/steps/ShoppingInfo'
import Payment from '../components/steps/Payment'
import Address from '../components/steps/Address'

function Checkout() {
  const [isActive, setisActive] = useState(0)
  const steps = [
    {
      num: 1,
      name: 'Personal Info',
    },
    // {
    //   num: 2,
    //   name: 'Shipping Info',
    // },
    {
      num: 2,
      name: 'Payment',
    },
  ]
  return (
    <div className="my-address checkout">
      <div className="steps">
        {steps.map((e, i) => (
          <div className="step" key={i}>
            <p
              className="step-num"
              style={{
                background: isActive === i ? '#3351A6' : '#F3F3F3',
                color: isActive === i ? '#ffff' : '#3351A6',
              }}
            >
              {e.num}
            </p>
            <p className="step-name">{e.name}</p>
          </div>
        ))}
      </div>
      <div>
           {isActive === 0 ? (
          <Address setisActive={setisActive} />
        ) : <Payment/> }

        {/* {isActive === 0 ? (
          <PersonalInfo setisActive={setisActive} />
        ) :isActive === 1 ? (
          <ShoppingInfo setisActive={setisActive} />
        ): <Payment/> } */}
      </div>
    </div>
  )
}

export default Checkout

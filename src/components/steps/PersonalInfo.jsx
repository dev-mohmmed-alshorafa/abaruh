import React, { useState } from 'react'
import './steps.css'
function PersonalInfo({ setisActive }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
  })
  return (
    <div className="personal-info">
      <div style={{ height: '6vh' }}>
        <p>Personal Info</p>
        <span>fill your info</span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setisActive(1)
        }}
        className="personal-info-form"
        action=""
      >
        <div>
          <input
            className="checkout-input"
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
            type="text"
          />{' '}
          <input
            className="checkout-input"
            placeholder="Phone Number"
            value={personalInfo.phone}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phone: e.target.value })
            }
            type="text"
          />{' '}
          <input
            className="checkout-input"
            placeholder="Address"
            value={personalInfo.address}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, address: e.target.value })
            }
            type="text"
          />{' '}
          <input
            className="checkout-input"
            placeholder="city"
            value={personalInfo.city}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, city: e.target.value })
            }
            type="text"
          />
        </div>
        <button className="continue">Continue</button>
      </form>
    </div>
  )
}

export default PersonalInfo

import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { Link } from 'react-router-dom'
function Form() {
  const [addressForm, setAddressForm] = useState({
    addressName: '',
    address: '',
    city: '',
  })
  const addAddress = (e) => {
    Apiservices.post('/address', addressForm).then(() => {
      setAddressForm({
        addressName: '',
        address: '',
        city: '',
      })
    })
  }
  return (
    <div className="add-address-form">
      <div className="inputs">
        <input
          placeholder="Address Name"
          value={addressForm.addressName}
          onChange={(e) =>
            setAddressForm({ ...addressForm, addressName: e.target.value })
          }
          type="text"
          required
        />
        <input
          placeholder="Address"
          value={addressForm.address}
          onChange={(e) =>
            setAddressForm({ ...addressForm, address: e.target.value })
          }
          type="text"
          required
        />
        <input
          placeholder="City"
          value={addressForm.city}
          onChange={(e) =>
            setAddressForm({ ...addressForm, city: e.target.value })
          }
          type="text"
          required
        />
      </div>
      <Link onClick={addAddress} to={'/addresses'}>
        Submit
      </Link>
    </div>
  )
}

export default Form

import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { Link } from 'react-router-dom'
import Loading from '../signLoading'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
function Form() {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [addressForm, setAddressForm] = useState({
    addressName: '',
    address: '',
    city: '',
  })
  const addAddress = (e) => {
    setIsLoading(true)
    e.preventDefault()
    if (addressForm.addressName && addressForm.address && addressForm.city) {
      Apiservices.post('/address', addressForm).then(() => {
        dispatch(actions.setIsAddress(false))
        setIsLoading(false)
        setAddressForm({
          addressName: '',
          address: '',
          city: '',
        })
      })
    } else {
      setIsLoading(false)
    }
  }
  return (
    <form className="add-address-form">
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
      <button onClick={addAddress} to={'/addresses'}>
        Submit
      </button>
      {isLoading && <Loading />}
    </form>
  )
}

export default Form

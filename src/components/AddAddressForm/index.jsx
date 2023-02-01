import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { Link } from 'react-router-dom'
import Loading from '../signLoading'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import AddressValid from '../../validation/Address'
function Form() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState(false)
  const [addressForm, setAddressForm] = useState({
    addressName: '',
    address: '',
    city: '',
  })
  const addAddress = async (e) => {
    e.preventDefault()

    try {
      const addressVailed = await AddressValid.validate(addressForm)

      setIsLoading(true)

      Apiservices.post('/address', addressForm).then(() => {
        dispatch(actions.setIsAddress(false))
        setIsLoading(false)
        setAddressForm({
          addressName: '',
          address: '',
          city: '',
        })
      })
    } catch (err) {
      toast.error(err.message)
    }
  }
  return (
    <form className="add-address-form">
      <div className="inputs">
        <input
          placeholder={t('addressname')}
          value={addressForm.addressName}
          onChange={(e) =>
            setAddressForm({ ...addressForm, addressName: e.target.value })
          }
          type="text"
          required
        />
        <input
          placeholder={t('address')}
          value={addressForm.address}
          onChange={(e) =>
            setAddressForm({ ...addressForm, address: e.target.value })
          }
          type="text"
          required
        />
        <input
          placeholder={t('city')}
          value={addressForm.city}
          onChange={(e) =>
            setAddressForm({ ...addressForm, city: e.target.value })
          }
          type="text"
          required
        />
      </div>
      <button onClick={addAddress} to={'/addresses'}>
        {t('submit')}
      </button>
      {isLoading && <Loading />}
    </form>
  )
}

export default Form

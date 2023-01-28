import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Apiservices from '../../services/ApiServices'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

function Address({ setisActive }) {
  const [addresses, setAddresses] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    Apiservices.get('/address').then((res) => setAddresses(res.data.data))
  }, [])
  const addressId = useSelector((state) => state.address)
  const cart = useSelector((state) => state.checkOutCart)
  const { t } = useTranslation()

  return (
    <div className="checkout-address">
      <section>
        <p className="title">{t('address')}</p>
        <div className="address-c">
          {addresses.map((e) => (
            <div key={e._id} className="name-checkout-address">
              <input
                type="radio"
                value={e._id}
                onChange={(e) => dispatch(actions.addAddressId(e.target.value))}
                name="address"
                id={e.addressName}
              />
              <label htmlFor={e.addressName}>{e.addressName}</label>
            </div>
          ))}

          <Link
            onClick={() => {
              dispatch(actions.setIsAddress(true))
            }}
            to={'/addresses'}
          >
            {t('addaddress')}
          </Link>
        </div>
      </section>
      {cart.length === 0 ? (
        <Link className="continue" to="/">
          {t('backhome')}
        </Link>
      ) : (
        <button
          onClick={() => {
            if (addressId) {
              setisActive(1)
            }else{
              toast.error(t('addaddresspls'));

            }
          }}
          className="continue"
        >
          {t('continue')}
        </button>
      )}
    </div>
  )
}

export default Address

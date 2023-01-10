import React, { useEffect, useState } from 'react'
import AddressHeader from '../components/addressHeader'
import OneAddress from '../components/oneAddress'
import Apiservices from '../services/ApiServices'
function Address() {
  const [address, setAddress] = useState([])
  useEffect(() => {
    Apiservices.get('/address').then((res) => {
      if (res.data.data) {
        setAddress(res.data.data)
      }
    })
  }, [])
  return (
    <div className="my-address">
      <AddressHeader />
      {address.length !== 0 && (
        <div className="addresses">
          {address.map((e) => (
            <OneAddress allAddress={address} setAllAddress={setAddress} address={e} key={e._id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Address

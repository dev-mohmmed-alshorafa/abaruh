import React, { useEffect, useState } from 'react'
import AddressHeader from '../components/addressHeader'
import OneAddress from '../components/oneAddress'
import Apiservices from '../services/ApiServices'
import SmallAddress from '../components/Skeleton/SmallAddress'
import AddAddress from './AddAddress'
function Address() {
  const [address, setAddress] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [isAddress,setIsAddress]=useState(false)

  useEffect(() => {
    setIsLoading(true)
    Apiservices.get('/address').then((res) => {
      setIsLoading(false)

      if (res.data.data) {
        setAddress(res.data.data)
      }
    })
  }, [isAddress])
  if(isAddress){
    return <AddAddress setIsAddress={setIsAddress}/>
  }
  return (
    <div className="my-address">
      <AddressHeader setIsAddress={setIsAddress} />
      {isLoading? <SmallAddress/> : address.length !== 0 && (
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

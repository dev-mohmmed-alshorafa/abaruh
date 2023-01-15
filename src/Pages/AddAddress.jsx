import React from 'react'
import AddAddressHeader from '../components/AddAddressHeader'
import AddAddressForm from '../components/AddAddressForm'
function AddAddress({setIsAddress}) {
  return (
    <div className='my-address'>
        <AddAddressHeader setIsAddress={setIsAddress}/>
        <AddAddressForm setIsAddress={setIsAddress}/>
    </div>
  )
}

export default AddAddress

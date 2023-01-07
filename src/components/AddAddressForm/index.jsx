import React, { useState } from 'react'

function Form() {
  const [addressForm,setAddressForm]=useState({
    name:'',
    address:'',
    city:''
  })
  return (
    <form className='add-address-form'>
      <div className='inputs'>
      <input placeholder='Address Name'
       value={addressForm.name}
       onChange={(e)=>setAddressForm({...addressForm,name:e.target.value})}
        type="text" />
      <input placeholder='Address'
        value={addressForm.address}
        onChange={(e)=>setAddressForm({...addressForm,address:e.target.value})}
       type="text" />
      <input placeholder='City'
        value={addressForm.city}
        onChange={(e)=>setAddressForm({...addressForm,city:e.target.value})}
         type="text" />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
